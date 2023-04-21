function solution(a, b) {
  let left = String(a) + String(b);
  let right = String(b) + String(a);

  return Number(left) > Number(right) ? Number(left) : Number(right);
}