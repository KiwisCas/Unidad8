// Shaders de las ramificaciones. Cada estructura se dibuja en tres modos:
//   MODE 0: render principal, MODE 1: sombra proyectada sobre el lienzo,
//   MODE 2: huella de pigmento (fase III) rasterizada en vista cenital.
import { NOISE, COMMON, WAVE } from './common.js';

const SHARED = /* glsl */ `
uniform float uTime;
uniform float uAspect;
uniform float uScale;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform vec4 uWave[8];
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
vec2 qToUv(vec2 q){ return q/vec2(uAspect, 1.0); }
vec3 toWorld(vec3 q){ return vec3((q.xy - vec2(uAspect*0.5, 0.5))*uScale, q.z*uScale); }
vec3 absAt(vec2 q){ vec2 uv = qToUv(q); return texture(tDry, uv).rgb + texture(tWet, uv).rgb; }
`;

const SHADOW = /* glsl */ `
vec4 projectShadow(vec3 world){
  vec3 L = normalize(uLight);
  world.xy -= L.xy/L.z*world.z;
  world.z = 0.01;
  return projectionMatrix*viewMatrix*vec4(world, 1.0);
}
`;

const HEAD = SHARED + NOISE + COMMON + WAVE;
const HEADV = HEAD + SHADOW;

// ---------------------------------------------------------------------------
// RAMIFICACIONES: cintas con jerarquía de grosor que crecen según su tiempo de
// nacimiento y se curvan con el campo vectorial (más cuanto más lejos de la raíz).
export const branchVert = HEADV + /* glsl */ `
attribute vec2 aTan;
attribute float aSide;
attribute float aWidth;
attribute float aBirth;
attribute float aArc;
attribute float aDepth;
attribute vec3 aPig;
uniform float uStart;
uniform float uFade;
uniform float uLookBias;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  float age = uTime - uStart;
  float grow = clamp((age - aBirth)*3.0, 0.0, 1.0);
  vec4 F = texture(tField, qToUv(position.xy));
  float look = clamp(F.b*uHybrid + uLookBias, 0.0, 1.0);
  // La curvatura inducida por el campo crece con la distancia a la raíz, acotada.
  vec2 bend = F.rg*min(aArc, 0.25)*0.7;
  vec2 p = position.xy + bend;
  vec2 tg = normalize(aTan + F.rg*min(aArc, 0.25)*3.0 + 1e-5);
  vec2 nr = vec2(-tg.y, tg.x);
  float w = max(aWidth, 0.0018)*grow*uFade;
  p += nr*aSide*w*0.5;
  float z = 0.002 + aArc*0.06*(1.0 - 0.7*look) + waveZ(position.xy)*0.5;
  vec3 world = toWorld(vec3(p, z));
  vSide = aSide; vGrow = grow; vDepth = aDepth; vArc = aArc; vLook = look; vQ = p; vPig = aPig;
#if MODE == 1
  gl_Position = projectShadow(world);
#else
  gl_Position = projectionMatrix*viewMatrix*vec4(world, 1.0);
#endif
}
`;

export const branchFrag = HEAD + /* glsl */ `
uniform float uStart;
uniform float uFade;
uniform float uShed;
varying float vSide;
varying float vGrow;
varying float vDepth;
varying float vArc;
varying float vLook;
varying vec2 vQ;
varying vec3 vPig;
void main(){
  if (vGrow <= 0.0) discard;
  float s = abs(vSide);
#if MODE == 0
  // Nervadura plana: cuerpo índigo, filo cian fino y eje luminoso sólo en los troncos.
  vec3 deep = vec3(0.07, 0.1, 0.34);
  vec3 cy = vec3(0.42, 0.84, 0.96);
  vec3 dig = mix(deep, cy, smoothstep(0.62, 0.9, s)*0.7);
  float spine = (1.0 - smoothstep(0.0, 0.16, s))*(1.0 - smoothstep(0.0, 1.5, vDepth));
  dig = mix(dig, vec3(0.9, 0.98, 1.0), spine*0.7);
  float a = smoothstep(1.0, 0.82, s)*mix(0.9, 0.6, vDepth/3.0);
  // Aspecto pigmentado: borde irregular y marea más oscura en el perímetro.
  float rag = fbm2(vQ*500.0 + vArc*30.0);
  float sp = s + (rag - 0.5)*0.55*vLook;
  vec3 Ah = hybridTint(vPig, 0.5 + 0.5*sin(vArc*20.0 + vDepth), 0.35);
  vec3 pig = PAPER*exp(-Ah*(0.55 + 0.9*smoothstep(0.35, 0.95, sp)));
  vec3 col = mix(dig, pig, vLook);
  float ap = smoothstep(1.0, 0.8, sp)*0.88;
  a = mix(a, ap, vLook)*uFade*uTech;
  gl_FragColor = vec4(col, a);
#elif MODE == 1
  gl_FragColor = vec4(0.05, 0.05, 0.12, 0.13*smoothstep(1.0, 0.5, s)*uFade*uTech*(1.0 - 0.6*vLook));
#else
  float amt = vLook*uShed*uFade*smoothstep(1.0, 0.4, s)*(0.15 + uAgitation);
  gl_FragColor = vec4(vPig*0.004*amt, 0.0012*amt);
#endif
}
`;

