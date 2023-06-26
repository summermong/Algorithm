function solution(citations) {
  const sorted = citations.sort((a, b) => a - b);
  const n = sorted.length;

  let hIndex = 0;
  for (let i = 0; i < n; i++) {
    if (sorted[i] >= n - i) {
      hIndex = n - i;
      break;
    }
  }

  return hIndex;
}