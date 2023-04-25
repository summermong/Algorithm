function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % 2 !== 0) {
      if (i % 2 !== 0) {
        sum += i;
      }
    } else {
      if (i % 2 === 0) {
        sum += Math.pow(i, 2);
      }
    }
  }
  return sum;
}