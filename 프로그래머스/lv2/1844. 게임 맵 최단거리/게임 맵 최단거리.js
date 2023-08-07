function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const queue = [];
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  const visited = Array.from(Array(row), () => Array(col).fill(false));

  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < row &&
        ny < col &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny, distance + 1]);
        visited[nx][ny] = true;
      }
    }

    if (x === row - 1 && y === col - 1) {
      return distance;
    }
  }

  return -1;
}
