function solution(k, tangerine) {
  let map = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1);
  }

  let sortedTangerine = [...map.values()].sort((a, b) => b - a);

  let sum = 0;
  let types = 0;

  for (let i = 0; i < sortedTangerine.length; i++) {
    sum += sortedTangerine[i];
    types++;
    if (sum >= k) {
      break;
    }
  }

  return types;
}