function solution(rank, attendance) {
  const students = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b);
  const answer = students.slice(0, 3).map(s => rank.indexOf(s));
  return 10000 * answer[0] + 100 * answer[1] + answer[2];
}
