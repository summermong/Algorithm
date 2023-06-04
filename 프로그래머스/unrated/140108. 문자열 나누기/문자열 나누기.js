function solution(s) {
  let countX = 0;
  let countNotX = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[0] === s[i]) {
      countX += 1;
    } else {
      countNotX += 1;
    }
    if (countX === countNotX) {
      s = s.slice(i + 1);
      answer += 1;
      countX = 0;
      countNotX = 0;
      i = -1;
    }
  }
  if (s.length > 0) {
    answer += 1;
  }
  return answer;
}