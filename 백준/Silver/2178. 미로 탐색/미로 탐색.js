const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [row, col] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((v) => v.split("").map(Number));
const queue = [];

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

// 시작점 (문제에서는 1, 1)
maze[0][0] = 1;
queue.push([0, 0]);

while (queue.length) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < row && ny < col && maze[nx][ny] === 1) {
      queue.push([nx, ny]);
      maze[nx][ny] = maze[x][y] + 1;
    }
  }
}

console.log(maze[row - 1][col - 1]);
