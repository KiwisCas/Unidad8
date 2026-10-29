// Los colores se manejan como absorbancias (Beer–Lambert): mezclar es sumar,
// lo que produce una mezcla sustractiva aproximada, como los pigmentos reales.
const A = (r, g, b) => [-Math.log(r), -Math.log(g), -Math.log(b)];

export const PIGMENTS = [
  { name: 'ultramar', A: A(0.16, 0.22, 0.63) },
  { name: 'cerúleo', A: A(0.22, 0.55, 0.74) },
  { name: 'violeta', A: A(0.45, 0.27, 0.62) },
  { name: 'magenta', A: A(0.80, 0.22, 0.55) },
  { name: 'carmín', A: A(0.74, 0.14, 0.24) },
  { name: 'ocre', A: A(0.82, 0.62, 0.32) },
  { name: 'amarillo cálido', A: A(0.97, 0.80, 0.28) },
];

export const DIGITAL = [
  { name: 'cian eléctrico', A: A(0.20, 0.80, 0.92) },
  { name: 'azul profundo', A: A(0.10, 0.16, 0.48) },
  { name: 'violeta', A: A(0.50, 0.36, 0.92) },
  { name: 'magenta', A: A(0.88, 0.30, 0.78) },
];

export function mixA(a, b, t, out = [0, 0, 0]) {
  for (let i = 0; i < 3; i++) out[i] = a[i] + (b[i] - a[i]) * t;
  return out;
}
