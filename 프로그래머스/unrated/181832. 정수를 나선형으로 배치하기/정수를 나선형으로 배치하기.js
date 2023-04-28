function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0)); // 2차원 배열 생성
  let x = 0, y = 0, direction = 0;
  const dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]; // 시계방향으로 이동하기 위한 dx, dy 배열

  for (let i = 1; i <= n*n; i++) {
    answer[x][y] = i; // 현재 위치에 값을 채움
    const nx = x + dx[direction];
    const ny = y + dy[direction];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] !== 0) {
      // 배열의 범위를 벗어나거나 이미 값이 채워진 경우 방향을 변경
      direction = (direction + 1) % 4;
    }
    x += dx[direction]; // 다음 위치로 이동
    y += dy[direction];
  }

  return answer;
}