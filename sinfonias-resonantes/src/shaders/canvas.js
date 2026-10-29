// Superficie del lienzo: papel + pigmento + relieve + red de physarum + paletas.
import { NOISE, COMMON, WAVE, FOLDS, PALETTE } from './common.js';
import { RD_HUE } from './reaction.js';

const UNIFORMS = /* glsl */ `
uniform float uAspect;
uniform float uScale;
uniform float uTime;
uniform float uTech;
uniform float uHybrid;
uniform float uAgitation;
uniform float uRelief;
uniform float uNetGlow;
uniform vec4 uFold[6];
uniform vec4 uFoldB[6];
uniform vec4 uWave[8];
uniform vec4 uCharge;
uniform vec3 uLight;
uniform sampler2D tWet;
uniform sampler2D tDry;
uniform sampler2D tField;
uniform sampler2D tPaper;
uniform sampler2D tTrail;
uniform sampler2D tRD;
uniform vec2 uRDTexel;
uniform float uRDVis;
`;

export const canvasVert = UNIFORMS + NOISE + WAVE + FOLDS + /* glsl */ `
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

float densAt(vec2 q){
  vec2 uv = q/vec2(uAspect, 1.0);
  return dot(texture(tDry, uv).rgb + texture(tWet, uv).rgb, vec3(0.3333));
}

// Desplazamientos que no son pliegues (los pliegues se sombrean por píxel).
float otherDisp(vec2 q){
  float z = waveZ(q)*(0.25 + 0.75*uTech);
  vec2 dc = q - uCharge.xy;
  z -= uCharge.z*0.012*exp(-dot(dc, dc)/0.003);
  vec2 uv = q/vec2(uAspect, 1.0);
  if (uRelief > 0.0){
    // El cuadro se eleva: la densidad de pigmento se vuelve topografía.
    const float r = 0.006;
    float d = densAt(q)*0.4 + (densAt(q + vec2(r, 0.0)) + densAt(q - vec2(r, 0.0)) + densAt(q + vec2(0.0, r)) + densAt(q - vec2(0.0, r)))*0.15;
    z += (1.0 - exp(-d*1.6))*uRelief;
    z += (1.0 - exp(-texture(tTrail, uv).r*0.04))*uRelief*0.18;
    // Los patrones de reacción-difusión se graban en relieve sobre la mancha.
    z += smoothstep(0.15, 0.4, texture(tRD, uv).g)*uRelief*0.1*uRDVis;
  }
  float hyb = texture(tField, uv).b*uHybrid;
  z += hyb*densAt(q)*0.006;
  return z;
}

void main(){
  vUv = uv;
  vec2 q = uv*vec2(uAspect, 1.0);
  float cr;
  float zf = foldHeight(q, cr);
  float e = 0.004;
  float z0 = otherDisp(q);
  float zx = otherDisp(q + vec2(e, 0.0));
  float zy = otherDisp(q + vec2(0.0, e));
  vGradOther = vec2(zx - z0, zy - z0)/e;
  vec3 world = vec3(position.xy, (zf + z0)*uScale);
  vWorld = world;
  gl_Position = projectionMatrix*modelViewMatrix*vec4(world, 1.0);
}
`;

export const canvasFrag = UNIFORMS + NOISE + COMMON + FOLDS + PALETTE + RD_HUE + /* glsl */ `
uniform vec2 uPaperTexel;
varying vec2 vUv;
varying vec2 vGradOther;
varying vec3 vWorld;

void main(){
  vec2 q0 = vUv*vec2(uAspect, 1.0);
  vec4 F = texture(tField, vUv);
  float hyb = F.b*uHybrid;
  float pk = paletteK(q0);

  // Fase II: el campo deforma las marcas y separa los canales del pigmento.
  float deform = uTech*(1.0 - 0.6*hyb);
  vec2 q = q0 + F.rg*0.07*deform;
  vec2 dc = q - uCharge.xy;
  float gc = exp(-dot(dc, dc)/0.006)*uCharge.z;
  q -= dc*gc*0.45;
  q += vec2(-dc.y, dc.x)*gc*0.7;
  vec2 uv = q/vec2(uAspect, 1.0);
  vec2 split = F.rg*0.022*deform/vec2(uAspect, 1.0) + vec2(0.0012, 0.0)*deform;
  vec4 W = texture(tWet, uv);
  vec3 A;
  A.r = texture(tDry, uv + split).r + texture(tWet, uv + split).r;
  A.g = texture(tDry, uv).g + W.g;
  A.b = texture(tDry, uv - split).b + texture(tWet, uv - split).b;

  vec4 P = texture(tPaper, vUv);
  float hx = texture(tPaper, vUv + vec2(uPaperTexel.x, 0.0)).r - texture(tPaper, vUv - vec2(uPaperTexel.x, 0.0)).r;
  float hy = texture(tPaper, vUv + vec2(0.0, uPaperTexel.y)).r - texture(tPaper, vUv - vec2(0.0, uPaperTexel.y)).r;

  float dens = dot(A, vec3(0.3333));
  float gran = 0.3 + 0.6*clamp((A.r - A.b)*0.5, 0.0, 1.0);
  A *= 1.0 + gran*(0.5 - P.r)*1.2*smoothstep(0.03, 0.5, dens);

  float ang = atan(F.g, F.r + 1e-6);
  A = hybridTint(A, 0.5 + 0.5*sin(ang*2.0 + uTime*0.1), hyb*0.28);
  A = palApply(A, pk);
  dens = dot(A, vec3(0.3333));

  // Noche: la tecnología apaga el papel y el pigmento emite; el encuentro devuelve la luz.
  float night = max(uTech*(1.0 - hyb), palNight(pk));
  float paperTex = 0.975 + 0.035*P.a;
  vec3 col = renderPigment(A, night, pk, paperTex);

  vec3 L = normalize(uLight);
  vec3 pn = normalize(vec3(-hx*0.9, -hy*0.9, 1.0));
  float relief = dot(pn, L) - L.z;
  col *= 1.0 + relief*0.22*(0.3 + 0.7*exp(-dens*2.5))*(1.0 - 0.6*night);

  float wet = smoothstep(0.03, 0.5, W.a);
  col *= 1.0 - 0.05*wet*(1.0 - night);
  col += wet*0.035*smoothstep(0.02, 0.08, relief);

  // Reacción-difusión: vetas finas que fluyen desde las manchas hacia el papel,
  // con el tono que transportan desde su origen. Emiten de noche, entintan de día.
  vec4 RDs = texture(tRD, uv);
  float rv = RDs.g;
  float pat = smoothstep(0.18, 0.42, rv)*uRDVis;
  vec2 rg = vec2(texture(tRD, uv + vec2(uRDTexel.x, 0.0)).g - texture(tRD, uv - vec2(uRDTexel.x, 0.0)).g,
                 texture(tRD, uv + vec2(0.0, uRDTexel.y)).g - texture(tRD, uv - vec2(0.0, uRDTexel.y)).g);
  float rEdge = smoothstep(0.05, 0.3, length(rg))*uRDVis;
  // Las zonas viejas se desvanecen antes de retirarse.
  float rLife = 1.0 - smoothstep(35.0, 58.0, RDs.b);
  vec3 rA = mix(palApply(rdHueA(RDs.a), pk), A/max(dens, 0.05)*0.9, 0.35*smoothstep(0.05, 0.3, dens));
  vec3 rHue = pigHue(rA);
  vec3 rNight = col + rHue*(pat*0.22 + rEdge*0.45)*rLife;
  vec3 rDay = col*exp(-rA*(pat*0.28 + rEdge*0.18)*rLife);
  col = mix(rDay, rNight, night);

  // Pliegues + relieve: luz rasante, más dramática de noche.
  float crease, cx, cy;
  float fe = 0.0015;
  float f0 = foldHeight(q0, crease);
  float fx = foldHeight(q0 + vec2(fe, 0.0), cx);
  float fy = foldHeight(q0 + vec2(0.0, fe), cy);
  vec2 fg = vec2(fx - f0, fy - f0)/fe;
  vec3 n = normalize(vec3(-(fg + vGradOther), 1.0));
  float sh = dot(n, L) - L.z;
  col *= clamp(1.0 + sh*mix(0.75, 1.5, night), 0.5, 1.2);
  vec3 hue = pigHue(A + vec3(0.03));
  col += night*max(sh, 0.0)*hue*0.35*smoothstep(0.05, 0.4, dens);
  col = mix(col, vec3(0.86, 0.97, 1.0), crease*mix(0.45, 0.12, night)*uTech*(1.0 - 0.6*uHybrid));

  // Red de physarum: filamentos luminosos de noche, tinta de día.
  float tr = texture(tTrail, vUv).r;
  float net = (1.0 - exp(-tr*0.09))*uNetGlow;
  float core = smoothstep(4.0, 30.0, tr)*uNetGlow;
  vec3 netGlow = (mix(vec3(0.3, 0.62, 0.95), hue*1.2, 0.8*smoothstep(0.02, 0.3, dens))*net + vec3(0.85, 0.94, 1.0)*core*0.22)*0.8;
  vec3 inkA = palApply(digitalA(0.5 + 0.5*sin(q0.x*3.0 + q0.y*2.0 + uTime*0.05)), pk);
  vec3 dayNet = col*exp(-inkA*net*0.9);
  col = mix(dayNet, col + netGlow, night);

  // Lectura algorítmica: curvas de nivel del pigmento (topografía luminosa de noche).
  float lev = dens*6.0;
  float fw = max(fwidth(lev), 1e-4);
  float dl = min(fract(lev), 1.0 - fract(lev))/fw;
  float line = 1.0 - smoothstep(0.5, 1.5, dl);
  float mask = uTech*0.45*smoothstep(0.05, 0.15, dens);
  vec3 lineCol = mix(mix(vec3(0.72, 0.93, 1.0), col*0.55, hyb), hue*1.4 + 0.08, night);
  col = mix(col, lineCol, line*mask*(0.55 + 0.25*(1.0 - uAgitation)));

  float vig = length(vUv - 0.5)*1.25;
  col *= 1.0 - mix(0.16, 0.45, night)*pow(vig, 2.2);
  gl_FragColor = vec4(col, 1.0);
}
`;
