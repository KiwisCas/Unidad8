// Physarum polycephalum (modelo de Jones): agentes que sienten, giran, avanzan y
// depositan rastro. Aquí el "alimento" es el pigmento: la red interpreta la pintura.
import { NOISE } from './common.js';

const HEAD = /* glsl */ `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`;

// Estado del agente: xy = posición (unidades de lienzo), z = rumbo, w = vida (0 = libre).
export const agentFrag = HEAD + /* glsl */ `
out vec4 oAgent;
uniform sampler2D tAgent;
uniform sampler2D tTrail;
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
uniform float uStrokeSteal;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
uniform float uSA;
uniform float uRA;
uniform float uSD;
uniform float uSpeed;
${NOISE}
vec2 toUv(vec2 q){ return q/vec2(uAspect, 1.0); }
float food(vec2 q){
  vec2 uv = toUv(q);
  vec3 A = texture(tDry, uv).rgb + texture(tWet, uv).rgb*mix(1.0, 4.0, uHybrid);
  return dot(A, vec3(0.3333));
}
float sense(vec2 q){
  float t = texture(tTrail, toUv(q)).r;
  vec2 dm = q - uMouse.xy;
  return t + food(q)*2.2 + uMouse.w*10.0*exp(-dot(dm, dm)/0.006);
}
void main(){
  vec4 a = texture(tAgent, vUv);
  float t = uTime;
  // El gesto recluta agentes: nacen sobre el trazo con su misma dirección como
  // "caminantes jóvenes" (w > 1) que avanzan rectos y luego la red los absorbe.
  // uStroke: xy = posición, zw = dirección del gesto.
  if (uActive > 0.5 && uStrokeCount > 0 && hash12(vUv*7.3 + t*2.1) < uStrokeSteal){
    int k = int(floor(hash12(vUv*19.1 + t)*float(uStrokeCount)));
    vec4 st = uStroke[k];
    vec2 cand = st.xy + (vec2(hash12(vUv*3.7 + t), hash12(vUv*8.9 - t)) - 0.5)*0.008;
    float head = length(st.zw) > 1e-4 ? atan(st.w, st.z) : hash12(vUv + t)*6.2831853;
    oAgent = vec4(cand, head + (hash12(vUv*5.3 - t) - 0.5)*1.3, 2.0);
    return;
  }
  if (a.w <= 0.0){
    oAgent = a;
    if (uActive < 0.5 || hash12(vUv*311.7 + t*1.37) > uSpawnRate) return;
    vec2 cand = vec2(hash12(vUv*53.1 + t), hash12(vUv*91.7 - t*0.7))*vec2(uAspect, 1.0);
    bool inside = length(cand - uOrigin) < uGrowR;
    if (inside && (food(cand) > 0.08 || hash12(vUv*3.3 + t) < 0.04))
      oAgent = vec4(cand, hash12(vUv + t)*6.2831853, 1.0);
    return;
  }
  vec2 p = a.xy;
  float ang = a.z;
  float rnd = hash12(vUv*131.1 + t*3.7);
  bool young = a.w > 1.0;
  if (young){
    // Trazo propio: casi recto, con leve ondulación.
    ang += (rnd - 0.5)*0.12;
  } else {
    float sa = uSA, ra = uRA*min(uDt*60.0, 2.0);
    float sF = sense(p + vec2(cos(ang), sin(ang))*uSD);
    float sL = sense(p + vec2(cos(ang + sa), sin(ang + sa))*uSD);
    float sR = sense(p + vec2(cos(ang - sa), sin(ang - sa))*uSD);
    if (sF > sL && sF > sR) ang += (rnd - 0.5)*0.1;
    else if (sF < sL && sF < sR) ang += (rnd - 0.5)*2.0*ra;
    else if (sL > sR) ang += ra;
    else ang -= ra;
  }
  vec2 F = texture(tField, toUv(p)).rg;
  p += (vec2(cos(ang), sin(ang))*uSpeed*(young ? 1.6 : 1.0) + F*0.5)*uDt;
  if (p.x < 0.003 || p.x > uAspect - 0.003){ ang = 3.14159265 - ang; p.x = clamp(p.x, 0.003, uAspect - 0.003); }
  if (p.y < 0.003 || p.y > 0.997){ ang = -ang; p.y = clamp(p.y, 0.003, 0.997); }
  float life = young ? max(1.0, a.w - uDt*0.7) : a.w - uDt*0.012;
  if (uActive < 0.5) life -= uDt*0.6;
  // Renovación lenta: la red nunca se congela.
  if (!young && hash12(vUv*77.7 + t*0.91) < 0.0015) life = 0.0;
  oAgent = vec4(p, ang, life);
}
`;

// Difusión y evaporación del rastro.
export const trailFrag = HEAD + /* glsl */ `
out vec4 oTrail;
uniform sampler2D tTrail;
uniform vec2 uTexel;
uniform float uDecay;
void main(){
  float c = texture(tTrail, vUv).r;
  float s = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++)
    s += texture(tTrail, vUv + vec2(float(i), float(j))*uTexel).r;
  oTrail = vec4(mix(c, s/9.0, 0.3)*uDecay, 0.0, 0.0, 1.0);
}
`;

// Depósito: un punto por agente, sumado sobre el mapa de rastro.
export const depositVert = /* glsl */ `
precision highp float;
precision highp sampler2D;
in vec3 position;
uniform sampler2D tAgent;
uniform float uSize;
uniform float uAspect;
out float vAlive;
void main(){
  float id = float(gl_VertexID);
  vec2 ref = (vec2(mod(id, uSize), floor(id/uSize)) + 0.5)/uSize;
  vec4 a = texture(tAgent, ref);
  vAlive = a.w;
  gl_PointSize = 1.0;
  gl_Position = a.w > 0.0 ? vec4((a.xy/vec2(uAspect, 1.0))*2.0 - 1.0, 0.0, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`;

export const depositFrag = /* glsl */ `
precision highp float;
in float vAlive;
out vec4 oTrail;
uniform float uDeposit;
void main(){ oTrail = vec4(uDeposit*min(vAlive*4.0, 1.0)*(vAlive > 1.0 ? 2.5 : 1.0), 0.0, 0.0, 0.0); }
`;
