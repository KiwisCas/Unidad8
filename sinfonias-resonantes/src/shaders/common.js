// Fragmentos GLSL compartidos por todos los sistemas.

export const NOISE = /* glsl */ `
float hash12(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0 - 2.0*f);
  float a = hash12(i), b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0)), d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
const mat2 ROT_FBM = mat2(1.6, 1.2, -1.2, 1.6);
float fbm2(vec2 p){ return 0.6667*vnoise(p) + 0.3333*vnoise(ROT_FBM*p + 5.3); }
float fbm4(vec2 p){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ s += a*vnoise(p); p = ROT_FBM*p + 3.7; a *= 0.5; }
  return s/0.9375;
}
`;

export const COMMON = /* glsl */ `
const vec3 PAPER = vec3(0.955, 0.940, 0.905);
// Rotación alrededor del eje acromático: desplaza el tono de una absorbancia
// sin cambiar su densidad total.
vec3 hueRotate(vec3 c, float a){
  const vec3 k = vec3(0.57735);
  float ca = cos(a), sa = sin(a);
  return c*ca + cross(k, c)*sa + k*dot(k, c)*(1.0 - ca);
}
// Banda cromática digital acotada (cian -> violeta -> magenta) en absorbancia.
vec3 digitalA(float s){
  s = clamp(s, 0.0, 1.0);
  vec3 c = vec3(1.6, 0.22, 0.08), v = vec3(0.69, 1.02, 0.09), m = vec3(0.13, 1.2, 0.25);
  return s < 0.5 ? mix(c, v, s*2.0) : mix(v, m, s*2.0 - 1.0);
}
// Desplaza un pigmento hacia la banda digital conservando su densidad:
// produce intermedios (azul-violeta, magenta-cian) sin derivar a verdes.
vec3 hybridTint(vec3 A, float s, float k){
  float d = dot(A, vec3(0.3333));
  vec3 T = digitalA(s);
  T *= d/dot(T, vec3(0.3333));
  return mix(A, T, k);
}
`;

// Paletas: una matriz sobre la absorbancia + color de papel / fondo nocturno.
// Un frente (uPalWave) lleva de la paleta 0 a la 1. Requiere NOISE y COMMON.
export const PALETTE = /* glsl */ `
uniform mat3 uPalM0;
uniform mat3 uPalM1;
uniform vec3 uPaper0;
uniform vec3 uPaper1;
uniform vec3 uGround0;
uniform vec3 uGround1;
uniform float uNight0;
uniform float uNight1;
uniform vec4 uPalWave;
float paletteK(vec2 q){
  if (uPalWave.w < 0.5) return 0.0;
  float d = length(q - uPalWave.xy) + (vnoise(q*6.0) - 0.5)*0.14;
  return 1.0 - smoothstep(uPalWave.z - 0.2, uPalWave.z, d);
}
vec3 palApply(vec3 A, float k){ return max(mix(uPalM0*A, uPalM1*A, k), 0.0); }
vec3 palPaper(float k){ return mix(uPaper0, uPaper1, k); }
vec3 palGround(float k){ return mix(uGround0, uGround1, k); }
float palNight(float k){ return mix(uNight0, uNight1, k); }
// Tono saturado de un pigmento, independiente de su densidad.
vec3 pigHue(vec3 A){ float d = max(dot(A, vec3(0.3333)), 0.04); return exp(-A/d*0.85); }
// Día: papel que absorbe. Noche: el pigmento emite su propio tono sobre un fondo de tinta.
vec3 renderPigment(vec3 A, float night, float k, float paperTex){
  vec3 day = palPaper(k)*paperTex*exp(-A);
  float dens = dot(A, vec3(0.3333));
  float cov = 1.0 - exp(-dens*2.6);
  vec3 glow = pigHue(A)*(0.45 + 0.8*cov);
  vec3 nightC = palGround(k)*(0.85 + 0.3*paperTex) + glow*cov*1.15;
  return mix(day, nightC, night);
}
`;

// Anillos de tensión que viajan por las superficies (requiere uTime y uWave[8]).
export const WAVE = /* glsl */ `
float waveZ(vec2 q){
  float z = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 w = uWave[i];
    if (w.w == 0.0) continue;
    float age = uTime - w.z;
    if (age < 0.0 || age > 5.0) continue;
    float r = length(q - w.xy);
    float x = r - age*0.32;
    z += w.w*sin(x*55.0)*exp(-x*x*110.0)*exp(-age*0.75);
  }
  return z;
}
`;

// Pliegues del lienzo: aristas rectas finitas con perfil de papel doblado
// (pendiente no nula en la arista). Requiere uFold[6] y uFoldB[6].
export const FOLDS = /* glsl */ `
float foldHeight(vec2 q, out float crease){
  float z = 0.0; crease = 0.0;
  for (int i = 0; i < 6; i++){
    vec4 f = uFold[i];
    if (abs(f.w) < 1e-5) continue;
    vec4 b = uFoldB[i];
    vec2 dir = vec2(cos(f.z), sin(f.z));
    vec2 r = q - f.xy;
    float d = dot(r, vec2(-dir.y, dir.x));
    float t = dot(r, dir);
    float along = 1.0 - smoothstep(b.y*0.55, b.y, abs(t));
    float prof = pow(max(0.0, 1.0 - sqrt(d*d + 1e-6)/b.x), 1.5);
    z += f.w*along*prof;
    crease = max(crease, along*(1.0 - smoothstep(0.0006, 0.0022, abs(d)))*smoothstep(0.0, 0.004, abs(f.w)));
  }
  return z;
}
`;
