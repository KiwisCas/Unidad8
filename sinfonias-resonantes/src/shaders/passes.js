// Pasadas de simulación a pantalla completa (GLSL ES 3.0, RawShaderMaterial).
import { NOISE } from './common.js';

export const MAX_SEG = 16;

const HEAD = /* glsl */ `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
`;

// ---------------------------------------------------------------------------
// Papel: textura procedural generada una vez por resolución.
// r = relieve fino, g = absorción (encolado irregular), b = fibras, a = tono.
export const paperFrag = HEAD + /* glsl */ `
out vec4 oPaper;
uniform float uAspect;
${NOISE}
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  float cells = fbm4(q*140.0);
  float f1 = vnoise(mat2(0.8, -0.6, 0.6, 0.8)*q*vec2(1100.0, 70.0));
  float f2 = vnoise(mat2(0.28, 0.96, -0.96, 0.28)*q*vec2(900.0, 60.0));
  float fiber = smoothstep(0.55, 0.95, f1)*0.6 + smoothstep(0.6, 0.95, f2)*0.5;
  float h = clamp(cells*0.8 + fiber*0.3 + vnoise(q*700.0)*0.15 - 0.12, 0.0, 1.0);
  float absb = fbm4(q*22.0 + 4.1)*0.72 + vnoise(q*75.0)*0.28;
  float tone = fbm4(q*3.0 + 9.0);
  oPaper = vec4(h, absb, fiber, tone);
}
`;

// ---------------------------------------------------------------------------
// Acuarela. Dos texturas (MRT):
//   wet: rgb = absorbancia del pigmento en suspensión, a = cantidad de agua
//   dry: rgb = absorbancia depositada en el papel,      a = humedad del papel
// Transporte de agua por flujos entre vecinos con permeabilidad del papel,
// arrastre de pigmento aguas abajo (upwind), evaporación más rápida en
// láminas delgadas (bordes) -> flujo capilar hacia el perímetro -> marea.
export const simFrag = HEAD + /* glsl */ `
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tDeposit;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uAdvect;
uniform float uAniso;
uniform float uDepositAmt;
uniform int uSegCount;
uniform vec4 uSeg[${MAX_SEG}];
uniform vec4 uSegP[${MAX_SEG}];
uniform vec4 uSegC[${MAX_SEG}];
uniform vec4 uDrop;
uniform sampler2D tTrail;
uniform float uDryAdvect;
uniform float uNetDeposit;
uniform vec3 uNetA;
uniform vec4 uDissolve;
uniform sampler2D tRD;
uniform float uRDDeposit;
${NOISE}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](1.0, 1.0, 1.0, 1.0, 0.7071, 0.7071, 0.7071, 0.7071);

float perm(vec4 pp, float damp){
  float a = pp.g*0.86 + pp.r*0.14;
  return mix(0.16 + 0.84*smoothstep(0.32, 0.7, a), 1.0, damp*0.85);
}

void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 F = texture(tField, vUv);
  vec2 vel = F.rg;
  float fl = length(vel);
  vec2 fdir = fl > 1e-5 ? vel/fl : vec2(1.0, 0.0);
  float an = uAniso*F.b*smoothstep(0.004, 0.05, fl);
  vec2 uv0 = vUv - vel*uAdvect*uDt*vec2(1.0/uAspect, 1.0);

  vec4 C = texture(tWet, uv0);
  // Marmolado (fase II): el campo arrastra también el pigmento seco.
  vec4 D = texture(tDry, vUv - vel*uDryAdvect*uDt*vec2(1.0/uAspect, 1.0));
  vec4 Pp = texture(tPaper, vUv);
  float w = C.a;
  float pC = perm(Pp, D.a);
  vec3 cC = min(C.rgb/max(w, 0.02), vec3(12.0));

  vec3 dP = vec3(0.0);
  float dW = 0.0;
  for (int i = 0; i < 8; i++){
    vec2 o = OFF[i]*uTexel;
    vec4 N = texture(tWet, uv0 + o);
    float pN = perm(texture(tPaper, vUv + o), texture(tDry, vUv + o).a);
    float al = abs(dot(normalize(OFF[i]), fdir));
    float g = WT[i]*mix(1.0, 0.4 + 1.2*al*al, an);
    float f = 0.055*0.5*(pC + pN)*g*(N.a - w);
    f *= smoothstep(0.003, 0.04, max(N.a, w));
    // Frente húmedo sobre papel seco: el agua sólo cruza si la lámina vecina
    // supera un umbral que depende de la absorción local -> bordes duros e irregulares.
    if (f > 0.0 && w < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pC), 0.1 + 0.3*(1.0 - pC), N.a);
    if (f < 0.0 && N.a < 0.012) f *= smoothstep(0.05 + 0.3*(1.0 - pN), 0.1 + 0.3*(1.0 - pN), w);
    vec3 cN = min(N.rgb/max(N.a, 0.02), vec3(12.0));
    dP += f > 0.0 ? f*cN : f*cC;
    dW += f;
    dP += 0.02*g*(N.rgb - C.rgb)*smoothstep(0.02, 0.2, min(N.a, w));
  }

  vec3 P = max(C.rgb + dP, 0.0);
  float wn = w + dW;
  float thin = 1.0 - smoothstep(0.02, 0.25, wn);
  wn -= uDt*(0.010 + 0.05*thin);

  // Sedimentación: más rápida cuando el agua se agota y en los valles del papel (granulación).
  float h = Pp.r;
  float settle = uDt*(0.05 + 1.6*(1.0 - smoothstep(0.0, 0.08, wn)))*(1.3 - 0.75*h);
  vec3 dep = P*clamp(settle, 0.0, 1.0);
  if (wn < 0.002) dep = P;
  // Re-humectación: el agua nueva levanta parte del pigmento seco (floraciones).
  vec3 lift = D.rgb*uDt*0.02*smoothstep(0.25, 0.9, wn);

  // Depósito del pincel: cápsulas deformadas por dominio, carga desigual.
  vec3 pAdd = vec3(0.0);
  float wAdd = 0.0;
  for (int i = 0; i < ${MAX_SEG}; i++){
    if (i >= uSegCount) break;
    vec4 s = uSeg[i]; vec4 sp = uSegP[i]; vec4 sc = uSegC[i];
    float r = sp.x;
    vec2 ba = s.zw - s.xy;
    float L2 = dot(ba, ba);
    vec2 pa0 = q - s.xy;
    float t0 = L2 > 1e-10 ? clamp(dot(pa0, ba)/L2, 0.0, 1.0) : 0.0;
    if (length(pa0 - ba*t0) > r*1.9) continue;
    float seed = sp.w;
    float fq = 2.2/r;
    vec2 wq = q + (vec2(fbm2(q*fq + seed), fbm2(q*fq + seed + 17.1)) - 0.5)*r*(0.5 + 0.9*sc.a);
    vec2 pa = wq - s.xy;
    float t = L2 > 1e-10 ? clamp(dot(pa, ba)/L2, 0.0, 1.0) : 0.0;
    float d = length(pa - ba*t);
    float rr = r*(0.78 + 0.5*vnoise(q*(5.0/r) + seed*1.7));
    float m = 1.0 - smoothstep(rr*0.82, rr, d);
    if (m <= 0.0) continue;
    float side = L2 > 1e-10 ? (pa.x*ba.y - pa.y*ba.x)/(sqrt(L2)*r) : 0.0;
    float dens = (0.5 + 1.0*fbm2(q*(3.5/r) + seed*3.1))*(1.0 + 0.5*side*(fract(seed*7.13)*2.0 - 1.0));
    dens *= (0.85 + 0.3*vnoise(q*240.0))*(1.2 - 0.45*h);
    wAdd += m*sp.y;
    pAdd += m*sp.z*max(dens, 0.05)*sc.rgb;
  }
  if (uDrop.w > 0.0){
    float n = fbm2(q*(2.0/uDrop.z) + 3.0);
    float dd = length(q - uDrop.xy)*(0.75 + 0.5*n);
    wAdd += uDrop.w*(1.0 - smoothstep(uDrop.z*0.45, uDrop.z, dd));
  }
  // La red de physarum entinta los huecos entre las manchas (complementa, no tapa).
  if (uNetDeposit > 0.0){
    float tr = texture(tTrail, vUv).r;
    float net = 1.0 - exp(-tr*0.05);
    float dl = dot(D.rgb + P, vec3(0.3333));
    float tone = 0.5 + 0.5*sin(q.x*5.0 + q.y*3.0);
    pAdd += uNetA*(0.7 + 0.6*tone)*net*(1.0 - smoothstep(0.15, 0.7, dl))*uNetDeposit*F.b*0.0012;
  }
  // Fase III: los patrones se vuelven pigmento del mismo tono que la mancha que los aloja.
  if (uRDDeposit > 0.0){
    float rv = smoothstep(0.15, 0.4, texture(tRD, vUv).g);
    vec3 Ah = D.rgb + P;
    float dh = dot(Ah, vec3(0.3333));
    // Sólo refuerza dentro de manchas existentes: nunca las expande (evita el crecimiento desbocado).
    float inside = smoothstep(0.12, 0.25, dh)*(1.0 - smoothstep(0.6, 1.1, dh));
    pAdd += Ah/max(dh, 0.05)*rv*inside*uRDDeposit*F.b*0.0006;
  }
  vec4 dep4 = texture(tDeposit, vUv);
  pAdd += dep4.rgb*uDepositAmt;
  wAdd += dep4.a*uDepositAmt;
  // Techo de saturación: la obra no se ennegrece con el tiempo.
  float tot = dot(D.rgb + P, vec3(0.3333));
  pAdd *= 1.0 - smoothstep(1.6, 3.0, tot);

  vec3 Pn = max(P - dep + lift + pAdd, 0.0);
  wn = clamp(wn + wAdd, 0.0, 1.6);
  vec3 Dn = max(D.rgb + dep - lift, 0.0);
  // Cambio de paleta: tras el frente, el cuadro anterior se aclara y deja espacio.
  if (uDissolve.w > 0.0){
    float dd = length(q - uDissolve.xy);
    float band = smoothstep(uDissolve.z - 0.5, uDissolve.z - 0.3, dd)*(1.0 - smoothstep(uDissolve.z - 0.05, uDissolve.z, dd));
    float keep = 1.0 - clamp(band*uDissolve.w*uDt, 0.0, 1.0);
    Dn *= keep;
    Pn *= keep;
  }
  float damp = max(D.a - uDt*0.045, smoothstep(0.01, 0.12, wn));
  oWet = vec4(Pn, wn);
  oDry = vec4(Dn, damp);
}
`;

export const copyFrag = HEAD + /* glsl */ `
layout(location = 0) out vec4 oWet;
layout(location = 1) out vec4 oDry;
uniform sampler2D tWet;
uniform sampler2D tDry;
void main(){ oWet = texture(tWet, vUv); oDry = texture(tDry, vUv); }
`;

// ---------------------------------------------------------------------------
// Campo vectorial (baja resolución):
//   rg = velocidad en unidades de lienzo/s, b = máscara híbrida, a = zonas elevadas.
export const fieldFrag = HEAD + /* glsl */ `
out vec4 oField;
uniform sampler2D tField;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uDt;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform vec4 uMouse;
uniform float uMouseGain;
uniform vec4 uVortex[8];
uniform int uVortexCount;
uniform vec4 uCharge;
uniform vec4 uRegions[16];
uniform int uRegionCount;
uniform vec4 uHyb;
uniform vec3 uHybDir;
${NOISE}
vec2 curl(vec2 p){
  float e = 0.02;
  float a = fbm2(p + vec2(0.0, e)), b = fbm2(p - vec2(0.0, e));
  float c = fbm2(p + vec2(e, 0.0)), d = fbm2(p - vec2(e, 0.0));
  return vec2(a - b, -(c - d))/(2.0*e);
}
float dens(vec2 uv){ return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333)); }
void main(){
  vec2 q = vec2(vUv.x*uAspect, vUv.y);
  vec4 cur = texture(tField, vUv);
  vec2 back = vUv - cur.rg*uDt*vec2(1.0/uAspect, 1.0);
  vec2 vel = texture(tField, back).rg*exp(-uDt*0.5);
  float act = max(uTech, uHybrid);

  // Flujo de base: ruido rotacional coherente, lento.
  vec2 base = curl(q*1.8 + vec2(uTime*0.015, -uTime*0.01))*0.035*act;
  vel += (base - vel)*min(uDt*0.4, 1.0);

  vec2 dm = q - uMouse.xy;
  vel += uMouse.zw*exp(-dot(dm, dm)/0.006)*uDt*4.0*uMouseGain;

  for (int i = 0; i < 8; i++){
    if (i >= uVortexCount) break;
    vec4 v = uVortex[i];
    vec2 d = q - v.xy;
    float r2 = dot(d, d);
    float rr = v.w*v.w;
    vel += v.z*vec2(-d.y, d.x)/sqrt(r2 + rr)*exp(-r2/(rr*3.0));
  }

  vec2 dc = uCharge.xy - q;
  float gc = exp(-dot(dc, dc)/0.03)*uCharge.z;
  vel += (dc*1.5 + vec2(-dc.y, dc.x)*3.0)*gc*uDt*act;

  // Retroalimentación: el pigmento curva el campo (fluye a lo largo de los contornos).
  float hyb = cur.b;
  vec2 e = uTexel*1.5;
  vec2 g = vec2(dens(vUv + vec2(e.x, 0.0)) - dens(vUv - vec2(e.x, 0.0)),
                dens(vUv + vec2(0.0, e.y)) - dens(vUv - vec2(0.0, e.y)));
  vel += (vec2(-g.y, g.x)*0.9 - g*0.3)*hyb*uHybrid*uDt*0.35;

  float L = length(vel);
  if (L > 0.45) vel *= 0.45/L;

  // Máscara del encuentro: frente orgánico, alargado hacia donde apunta el gesto.
  vec2 rel = q - uHyb.xy;
  float al = dot(rel, uHybDir.xy);
  float pe = dot(rel, vec2(-uHybDir.y, uHybDir.x));
  float da = length(vec2(al/(1.0 + uHybDir.z*step(0.0, al)), pe));
  float edge = uHyb.z + (fbm2(q*5.0 + uTime*0.05) - 0.5)*0.2;
  hyb = max(hyb, (1.0 - smoothstep(edge - 0.15, edge, da))*uHyb.w);

  float lift = 0.0;
  for (int i = 0; i < 16; i++){
    if (i >= uRegionCount) break;
    vec4 r = uRegions[i];
    float d = length(q - r.xy) + (fbm2(q*12.0 + float(i)*3.1) - 0.5)*r.z*0.6;
    lift = max(lift, (1.0 - smoothstep(r.z*0.55, r.z*1.1, d))*r.w);
  }
  oField = vec4(vel, hyb, lift);
}
`;

// ---------------------------------------------------------------------------
// Densidad reducida para el análisis de regiones en CPU (8 bits).
export const densityFrag = HEAD + /* glsl */ `
out vec4 oDens;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform vec2 uTexel;
void main(){
  vec3 A = vec3(0.0);
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++){
    vec2 uv = vUv + (vec2(float(i), float(j)) - 0.5)*uTexel*0.5;
    A += texture(tDry, uv).rgb + texture(tWet, uv).rgb;
  }
  A *= 0.25;
  float d = dot(A, vec3(0.3333));
  oDens = vec4(clamp(A/4.0, 0.0, 1.0), clamp(d/2.0, 0.0, 1.0));
}
`;
