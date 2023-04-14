function solution(sizes) {
  let answerMax = [];
  let answerMin = [];

  for (let i = 0; i < sizes.length; i++) {
    let maxWidth = Math.max(sizes[i][0], sizes[i][1]);
    answerMax.push(maxWidth);
    let minWidth = Math.min(sizes[i][0], sizes[i][1]);
    answerMin.push(minWidth);
  }
  return Math.max(...answerMax) * Math.max(...answerMin);
}