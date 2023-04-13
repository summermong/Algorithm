function solution(sizes) {
  let max_width = 0;
  let max_height = 0;
  
  // 가장 큰 가로 길이와 세로 길이를 구합니다.
  for (let i = 0; i < sizes.length; i++) {
    let size = sizes[i];
    max_width = Math.max(max_width, Math.max(...size));
    max_height = Math.max(max_height, Math.min(...size));
  }
  
  // 가로 길이가 더 긴 경우와 세로 길이가 더 긴 경우를 모두 고려하여
  // 가장 작은 지갑 크기를 계산합니다.
  return max_width * max_height;
}
