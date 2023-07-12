const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input.shift());
const complex = input.map((v) => v.split("").map(Number));
const map = Array.from(Array(num), () => Array(num).fill(false));

const houseCount = [];

const queue = []; // BFS 탐색을 위한 큐 생성

// BFS 탐색 함수 정의
function bfs(row, col) {
  const dr = [-1, 1, 0, 0]; // 상하좌우
  const dc = [0, 0, -1, 1]; // 상하좌우
  let count = 0; // 집의 수를 저장할 변수

  queue.push([row, col]); // 시작 위치를 큐에 추가
  map[row][col] = true; // 시작 위치를 방문 표시

  while (queue.length > 0) {
    const [r, c] = queue.shift(); // 큐에서 위치를 꺼냄
    count++; // 집의 수 증가

    // 상하좌우 위치 확인
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        nr >= 0 &&
        nr < num &&
        nc >= 0 &&
        nc < num &&
        !map[nr][nc] &&
        complex[nr][nc] === 1
      ) {
        queue.push([nr, nc]); // 방문하지 않은 집인 경우 큐에 추가
        map[nr][nc] = true; // 방문 표시
      }
    }
  }
  houseCount.push(count); // 형성된 단지의 집 수를 리스트에 추가
}

// 지도의 모든 위치를 탐색하면서 BFS 탐색 시작
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (complex[i][j] === 1 && !map[i][j]) {
      bfs(i, j); // 집이 있는 위치이고 아직 방문하지 않은 경우 BFS 탐색 시작
    }
  }
}

houseCount.sort((a, b) => a - b); // 집의 수를 오름차순으로 정렬

console.log(houseCount.length); // 총 단지 수 출력
console.log(houseCount.join("\n")); // 각 단지별 집의 수 출력
