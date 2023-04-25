function solution(a, b, n) {
  let getCoke = 0;
  let sumCoke = 0;

  while (n >= a) {
    getCoke = parseInt(n / a) * b;
    sumCoke += getCoke;
    n = getCoke + (n % a);
  }
  return sumCoke;
}
