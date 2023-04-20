function solution(a, b) {
  let abPlus = String(a) + String(b);
  let abMultipy = 2 * a * b;
  return Math.max(abPlus, abMultipy);
}