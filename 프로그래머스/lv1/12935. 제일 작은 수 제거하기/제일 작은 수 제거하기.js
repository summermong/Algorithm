function solution(arr) {
  let min = Math.min(...arr);

  let filtered = arr.filter((item) => item !== min);
  return filtered.length !== 0 ? filtered : [-1];
}