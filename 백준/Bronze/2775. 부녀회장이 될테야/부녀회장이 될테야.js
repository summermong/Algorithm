const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function calculateResidents(k, n) {
  const dp = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  // 0층 초기화
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[k][n];
}

const testCase = input[0];
let currentIndex = 1;

for (let i = 0; i < testCase; i++) {
  const k = input[currentIndex];
  const n = input[currentIndex + 1];
  const residents = calculateResidents(k, n);
  console.log(residents);
  currentIndex += 2;
}
