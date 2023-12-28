function solution(s1, s2) {
  let str1 = s1.toUpperCase();
  let str2 = s2.toUpperCase();

  let group1 = new Map();
  let group2 = new Map();

  let intersection = new Map(); // 교집합

  for (let i = 0; i < str1.length - 1; i++) {
    let part1 = str1.slice(i, i + 2).replace(/[^a-zA-Z]/g, '');

    if (part1.length > 1) {
      group1.set(part1, (group1.get(part1) || 0) + 1);
      if (group2.has(part1)) {
        intersection.set(part1, Math.min(group1.get(part1), group2.get(part1)));
      }
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let part2 = str2.slice(i, i + 2).replace(/[^a-zA-Z]/g, '');

    if (part2.length > 1) {
      group2.set(part2, (group2.get(part2) || 0) + 1);
      if (group1.has(part2)) {
        intersection.set(part2, Math.min(group1.get(part2), group2.get(part2)));
      }
    }
  }

  let interLeng = Array.from(intersection.values()).reduce(
    (acc, v) => acc + v,
    0
  );
  let unionLeng =
    Array.from(group1.values()).reduce((acc, v) => acc + v, 0) +
    Array.from(group2.values()).reduce((acc, v) => acc + v, 0) -
    interLeng;

  let similarity = unionLeng === 0 ? 1 : interLeng / unionLeng;
  let answer = Math.floor(similarity * 65536);

  return answer;
}