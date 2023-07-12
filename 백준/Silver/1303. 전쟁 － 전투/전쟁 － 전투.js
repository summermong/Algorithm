const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력 첫 줄의 전쟁터 가로 세로 크기
const [col, row] = input.shift().split(" ").map(Number);

// 군인 배열
const soldiers = input.map((v) => v.split(""));

// 방문 여부 확인할 배열
const visited = Array.from(Array(row), () => Array(col).fill(false));

const queue = [];
const our = [];
const enemy = [];

function bfs(startRow, startCol, team) {
  queue.push([startRow, startCol]);
  visited[startRow][startCol] = true;
  let power = 0;

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      const nr = currentRow + dr[i];
      const nc = currentCol + dc[i];

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < row &&
        nc < col &&
        soldiers[nr][nc] === team &&
        !visited[nr][nc]
      ) {
        queue.push([nr, nc]);
        visited[nr][nc] = true;
      }
    }
    power++;
  }

  if (team === "W") {
    our.push(power);
  } else {
    enemy.push(power);
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (soldiers[i][j] === "W" && !visited[i][j]) {
      bfs(i, j, "W");
    } else if (soldiers[i][j] === "B" && !visited[i][j]) {
      bfs(i, j, "B");
    }
  }
}

let answer1 = our.reduce((sum, power) => sum + power * power, 0);
let answer2 = enemy.reduce((sum, power) => sum + power * power, 0);

console.log(answer1, answer2);
