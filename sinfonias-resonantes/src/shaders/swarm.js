// Enjambre de escamas de pigmento: agentes autónomos con steering behaviours
// (flujo 3D, buscar/huir/orbitar el cursor, seguir la trayectoria del trazo).
import { NOISE, NOISE3, COMMON, PALETTE } from './common.js';

// MRT: posición (xyz, vida) · velocidad (xyz, semilla) · pigmento (absorbancia, nacimiento).
export const swarmUpdateFrag = /* glsl */ `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
layout(location = 0) out vec4 oPos;
layout(location = 1) out vec4 oVel;
layout(location = 2) out vec4 oCol;
uniform sampler2D tPos;
uniform sampler2D tVel;
uniform sampler2D tCol;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uHybrid;
uniform float uSpawnRate;
uniform float uStrokeSpawn;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
${NOISE}
${NOISE3}
vec2 toUv(vec2 q){ return q/vec2(uAspect, 1.0); }
vec3 absAt(vec2 q){ vec2 uv = toUv(q); return texture(tDry, uv).rgb + texture(tWet, uv).rgb; }

void main(){
  vec4 P = texture(tPos, vUv), V = texture(tVel, vUv), C = texture(tCol, vUv);
  float seed = hash12(vUv*713.1);
  float t = uTime;
  oPos = P; oVel = V; oCol = C;

  if (P.w <= 0.0){
    if (uActive < 0.5 || hash12(vUv*41.3 + t*1.7) > uSpawnRate) return;
    vec2 cand = vec2(hash12(vUv*12.9 + t), hash12(vUv*77.3 - t*1.3))*vec2(uAspect, 1.0);
    bool fromStroke = false;
    if (uStrokeCount > 0 && hash12(vUv*5.1 + t*2.3) < uStrokeSpawn){
      int k = int(floor(hash12(vUv*29.1 + t)*float(uStrokeCount)));
      cand = uStroke[k].xy + (vec2(hash12(vUv*2.7 + t), hash12(vUv*6.1 - t)) - 0.5)*0.03;
      fromStroke = true;
    }
    vec3 A = absAt(cand);
    float d = dot(A, vec3(0.3333));
    if (!fromStroke && (length(cand - uOrigin) > uGrowR || d < 0.1)) return;
    if (fromStroke && d < 0.05) A = vec3(0.9, 0.5, 0.15);
    vec2 F = texture(tField, toUv(cand)).rg;
    oPos = vec4(cand, 0.002, 1.0);
    oVel = vec4(F*0.5, 0.03 + seed*0.05, seed);
    oCol = vec4(A, t);
    return;
  }

  vec3 p = P.xyz, v = V.xyz;
  // 1. Seguir el flujo: velocidad deseada según un campo rotacional 3D + el campo compartido.
  vec3 desired = curl3(vec3(p.xy*3.0, p.z*6.0 + t*0.07))*0.045;
  desired.xy += texture(tField, toUv(p.xy)).rg*0.9;
  // 2. Banda de altura: flotan en la fase II, se posan para pintar en la III.
  float zt = mix(0.035 + seed*0.11, 0.003 + seed*0.012, uHybrid);
  desired.z += (zt - p.z)*1.6;
  // 3. Cursor: lento = buscar y orbitar, rápido = huir.
  vec2 dm = p.xy - uMouse.xy;
  float dl = length(dm);
  float infl = exp(-dl*dl/0.012);
  if (uMouse.w > 0.5){
    desired.xy += (vec2(-dm.y, dm.x)/(dl + 0.02)*0.1 - dm*1.4)*infl;
    desired.z += 0.04*infl*(1.0 - uHybrid);
  } else if (uMouse.w < -0.5){
    desired.xy += dm/(dl + 0.01)*0.55*infl;
    desired.z += 0.12*infl*(1.0 - uHybrid);
  }
  // 4. Seguimiento de trayectoria: recorren el gesto reciente en carriles paralelos.
  if (uStrokeCount > 1 && uHybrid > 0.05){
    float best = 1e9; int bi = 0;
    for (int i = 0; i < 16; i++){
      if (i >= uStrokeCount) break;
      float dd = length(uStroke[i].xy - p.xy);
      if (dd < best){ best = dd; bi = i; }
    }
    int ni = min(bi + 1, uStrokeCount - 1);
    vec2 seg = uStroke[ni].xy - uStroke[bi].xy;
    vec2 tg = length(seg) > 1e-5 ? normalize(seg) : vec2(1.0, 0.0);
    vec2 target = uStroke[ni].xy + vec2(-tg.y, tg.x)*(seed - 0.5)*0.035;
    float w = exp(-best*best/0.006)*uHybrid;
    desired.xy = mix(desired.xy, normalize(target - p.xy + 1e-5)*0.22, w*0.85);
  }
  // Steering: fuerza = deseada - actual, limitada; velocidad limitada.
  vec3 steer = desired - v;
  float sl = length(steer);
  if (sl > 0.7) steer *= 0.7/sl;
  v += steer*min(uDt*3.0, 0.5);
  float sp = length(v);
  if (sp > 0.32) v *= 0.32/sp;
  p += v*uDt;
  p.z = max(p.z, 0.001);
  float life = P.w - uDt/(7.0 + seed*7.0);
  if (uActive < 0.5) life -= uDt*0.8;
  if (p.x < 0.0 || p.x > uAspect || p.y < 0.0 || p.y > 1.0) life = 0.0;
  oPos = vec4(p, life);
  oVel = vec4(v, V.w);
}
`;

const RENDER_HEAD = /* glsl */ `
uniform float uTime;
uniform float uAspect;
uniform float uScale;
uniform float uTech;
uniform float uHybrid;
uniform sampler2D tPos;
uniform sampler2D tVel;
uniform sampler2D tCol;
uniform sampler2D tField;
${NOISE}
${COMMON}
${PALETTE}
`;

// Escama orientada a la velocidad: más larga cuanto más rápida.
export const swarmVert = RENDER_HEAD + /* glsl */ `
attribute vec2 aRef;
varying vec2 vL;
varying vec3 vA;
varying float vFade;
varying float vZ;
varying vec2 vQ;
void main(){
  vec4 P = texture(tPos, aRef);
  if (P.w <= 0.0){ gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  vec4 V = texture(tVel, aRef);
  vec4 C = texture(tCol, aRef);
  vec3 wp = vec3((P.xy - vec2(uAspect*0.5, 0.5))*uScale, P.z*uScale);
  vec3 vel = V.xyz*uScale;
  float sp = length(vel);
  vec3 fwd = sp > 1e-5 ? vel/sp : vec3(1.0, 0.0, 0.0);
  vec3 toCam = normalize(cameraPosition - wp);
  vec3 side = normalize(cross(fwd, toCam) + vec3(1e-5));
  float r = fract(V.w*7.31);
  float len = 0.05 + sp*0.35;
  float wid = 0.024*(0.55 + r*0.9);
#if MODE == 2
  len *= 0.7; wid *= 1.6;
#endif
  wp += fwd*position.x*len + side*position.y*wid;
  vL = position.xy;
  vA = C.rgb;
  vFade = smoothstep(0.0, 0.12, P.w)*smoothstep(0.0, 0.8, uTime - C.a);
  vZ = P.z;
  vQ = P.xy;
  gl_Position = projectionMatrix*viewMatrix*vec4(wp, 1.0);
}
`;

export const swarmFrag = RENDER_HEAD + /* glsl */ `
varying vec2 vL;
varying vec3 vA;
varying float vFade;
varying float vZ;
varying vec2 vQ;
void main(){
  float s = abs(vL.y)*2.0;
  float l = vL.x + 0.5;
  float k = paletteK(vQ);
  float hyb = texture(tField, vQ/vec2(uAspect, 1.0)).b*uHybrid;
  vec3 Ah = hybridTint(vA, 0.5 + 0.5*sin(vQ.x*4.0 + uTime*0.1), 0.3 + 0.3*hyb);
  vec3 A = palApply(Ah, k);
#if MODE == 0
  float shape = (1.0 - smoothstep(0.35, 1.0, s))*smoothstep(0.0, 0.7, l)*(1.0 - smoothstep(0.85, 1.0, l));
  float night = max(uTech*(1.0 - hyb), palNight(k));
  vec3 hue = pigHue(A);
  vec3 glow = hue*1.25 + vec3(0.25, 0.3, 0.35)*(1.0 - s)*smoothstep(0.6, 1.0, l);
  vec3 ink = palPaper(k)*exp(-A*1.3);
  vec3 col = mix(ink, glow, night);
  float a = shape*vFade*mix(0.8, 0.95, night);
  gl_FragColor = vec4(col, a);
#else
  // Al posarse, las escamas dejan pigmento: pinceladas complementarias.
  float shape = 1.0 - smoothstep(0.3, 1.0, s);
  float touch = 1.0 - smoothstep(0.004, 0.02, vZ);
  // Sólo una parte del enjambre pinta, y poco: complementa sin tapar.
  float painter = step(fract(vA.r*13.7 + vA.g*7.1), 0.3);
  float amt = shape*vFade*touch*hyb*painter;
  gl_FragColor = vec4(Ah*0.0025*amt, 0.0008*amt);
#endif
}
`;
