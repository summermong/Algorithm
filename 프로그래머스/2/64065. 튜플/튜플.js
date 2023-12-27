function solution(s) {
  let pair = [];
  let num = s
    .replaceAll('{', '')
    .replaceAll('}', '')
    .split(',')
    .map((v) => Number(v));
  let map = new Map();

  for (let i = 0; i < num.length; i++) {
    map.set(num[i], (map.get(num[i]) || 0) + 1);
  }

  let pairs = map.forEach((i, v) => {
    pair.push([v, i]);
  });

  pair.sort((a, b) => b[1] - a[1]);

  let answer = [];

  for (let i = 0; i < pair.length; i++) {
    answer.push(pair[i][0]);
  }

  return answer;
}