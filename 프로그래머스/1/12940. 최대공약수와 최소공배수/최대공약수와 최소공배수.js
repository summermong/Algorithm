function solution(n, m) {
  const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
  };

  const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
  };

  return [getGCD(n, m), getLCM(n, m)];
}