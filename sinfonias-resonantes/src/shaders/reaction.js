// Reacción-difusión Gray-Scott en régimen de laberinto / huella dactilar.
// Nace en el pigmento, se alimenta de él y se extiende por el papel; la difusión
// se alinea con el campo de flujo (vetas que fluyen) y cada zona envejece y se
// retira, de modo que la obra crece y se renueva en ciclos.
import { NOISE } from './common.js';

// Absorbancia de un tono transportado s ∈ [0,1]: ultramar -> violeta -> carmín -> ocre.
export const RD_HUE = /* glsl */ `
vec3 rdHueA(float s){
  vec3 a = vec3(1.83, 1.51, 0.46), b = vec3(0.80, 1.31, 0.48);
  vec3 c = vec3(0.30, 1.70, 0.90), d = vec3(0.20, 0.48, 1.14);
  s = clamp(s, 0.0, 1.0)*3.0;
  return s < 1.0 ? mix(a, b, s) : s < 2.0 ? mix(b, c, s - 1.0) : mix(c, d, s - 2.0);
}
`;

// Estado: r = 1 - U (el vacío inicial es U = 1), g = V, b = edad (s), a = tono transportado.
export const reactionFrag = /* glsl */ `
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 oRD;
uniform sampler2D tState;
uniform sampler2D tDry;
uniform sampler2D tWet;
uniform sampler2D tField;
uniform vec2 uTexel;
uniform float uAspect;
uniform float uTime;
uniform float uAdvect;
uniform float uStepDt;
uniform float uIterSec;
uniform float uActive;
uniform float uGrowR;
uniform vec2 uOrigin;
uniform float uSeedRate;
uniform vec4 uMouse;
uniform vec4 uStroke[16];
uniform int uStrokeCount;
${NOISE}
const vec2 OFF[8] = vec2[8](vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
                            vec2(1.0, 1.0), vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(-1.0, -1.0));
const float WT[8] = float[8](0.2, 0.2, 0.2, 0.2, 0.05, 0.05, 0.05, 0.05);

void main(){
  vec2 q = vUv*vec2(uAspect, 1.0);
  vec2 vel = texture(tField, vUv).rg;
  vec2 uv = vUv - vel*uAdvect/vec2(uAspect, 1.0);
  vec4 c = texture(tState, uv);
  float U = 1.0 - c.r, V = c.g, age = c.b, hue = c.a;

  // Orientación: el campo compartido más una corriente lenta propia, para que
  // las vetas fluyan incluso donde el campo está en calma.
  float th = vnoise(q*1.3 + uTime*0.004)*6.2831853;
  vec2 fdir = normalize(vel*8.0 + vec2(cos(th), sin(th))*0.15 + 1e-5);
  float an = 0.45;

  // Laplaciano anisótropo: difunde más a lo largo del flujo que a través de él.
  vec2 lap = vec2(0.0);
  float wsum = 0.0, hueW = 0.0, hueS = 0.0;
  for (int i = 0; i < 8; i++){
    vec4 n = texture(tState, uv + OFF[i]*uTexel);
    float al = dot(normalize(OFF[i]), fdir);
    float w = WT[i]*(1.0 + an*(2.0*al*al - 1.0));
    lap += w*vec2(1.0 - n.r - U, n.g - V);
    wsum += w;
    hueS += n.a*n.g*WT[i];
    hueW += n.g*WT[i];
  }
  lap /= wsum;

  vec3 A = texture(tDry, vUv).rgb + texture(tWet, vUv).rgb;
  float d = dot(A, vec3(0.3333));
  float food = smoothstep(0.03, 0.25, d);

  // Régimen variable por zonas (laberinto <-> huella dactilar); el pigmento nutre.
  float z = vnoise(q*1.7 + 3.1);
  // Sobre papel desnudo hay menos alimento: el frente avanza desde las manchas, despacio.
  float F = mix(0.029, 0.039, z) + food*0.004 - (1.0 - food)*0.002;
  float K = mix(0.057, 0.0595, z) + food*0.0005;
  // Envejecimiento: tras ~40-60 s la zona se retira y deja espacio para regenerarse.
  K += smoothstep(40.0, 60.0, age)*0.012;
  K += (1.0 - uActive)*0.03;

  float r = U*V*V;
  // Escala del patrón variable por zonas: vetas anchas y finas conviven.
  float ds = mix(0.65, 1.3, vnoise(q*0.9 + 7.7));
  // El tiempo corre más despacio sobre el papel: el patrón se adentra poco a poco.
  float ts = uStepDt*mix(0.3, 1.0, food);
  U += ts*(ds*lap.x - r + F*(1.0 - U));
  V += ts*(0.5*ds*lap.y + r - (F + K)*V);

  age = V > 0.15 ? age + uIterSec : max(0.0, age - uIterSec*3.0);
  // El tono viaja con el crecimiento y se tiñe del pigmento que atraviesa.
  float sPig = clamp(0.5 + (A.b - A.r)*0.45/max(d, 0.05), 0.0, 1.0);
  hue = hueW > 1e-3 ? mix(hue, hueS/hueW, 0.25) : hue;
  hue = mix(hue, sPig, 0.04*food);

  if (uActive > 0.5){
    float dist = length(q - uOrigin);
    float front = 1.0 - smoothstep(0.0, 0.1, abs(dist - uGrowR));
    float blob = vnoise(q*60.0 + floor(uTime*0.5)*13.7);
    // Semillas suaves (manchas de ruido, no píxeles) donde hay pigmento.
    if (dist < uGrowR && blob > 1.0 - (0.08*front + uSeedRate)*food){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    for (int i = 0; i < 16; i++){
      if (i >= uStrokeCount) break;
      if (length(q - uStroke[i].xy) < 0.01){ V = max(V, 0.5); hue = sPig; age = 0.0; }
    }
    float dm = length(q - uMouse.xy);
    if (uMouse.w > 0.5 && dm < 0.014){ V = max(V, 0.45); age = 0.0; }
    if (uMouse.w < -0.5) V *= mix(1.0, 0.85, exp(-dm*dm/0.0025));
  }
  oRD = vec4(clamp(1.0 - U, 0.0, 1.0), clamp(V, 0.0, 1.0), age, hue);
}
`;
