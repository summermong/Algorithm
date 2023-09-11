const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const numOfStone = Number(input);

function stoneGameWinner(N) {
  const dp = new Array(N + 1).fill(false);

  // 초기 상태 설정
  dp[1] = true;
  dp[2] = false;
  dp[3] = true;

  // DP 배열 채우기
  for (let i = 4; i <= N; i++) {
    dp[i] = !dp[i - 1] || !dp[i - 3];
  }

  // 결과 출력
  return dp[N] ? 'SK' : 'CY';
}

const winner = stoneGameWinner(numOfStone);
console.log(winner);
