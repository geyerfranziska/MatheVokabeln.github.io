function loesen(p, q) {
  let teil1 = -p / 2;
  let teil2 = (p / 2)**2 - q;
  if (teil2 < 0)  return [];
  if (teil2 === 0) return [teil1];
  teil2 = Math.sqrt(teil2);
  return [teil1 + teil2, teil1 - teil2];
}
