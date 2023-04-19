function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    const subStr = t.substring(i, i + p.length);
    if (parseInt(subStr) <= parseInt(p)) {
      count++;
    }
  }
  return count;
}
