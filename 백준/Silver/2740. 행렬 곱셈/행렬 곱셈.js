const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const matrixA = parseMatrix(input, N, M);

const [M2, K] = input[N + 1].split(' ').map(Number);
const matrixB = parseMatrix(input.slice(N + 1), M2, K);

const resultMatrix = multiplyMatrices(matrixA, matrixB);
resultMatrix.forEach((row) => console.log(row.join(' ')));

function multiplyMatrices(matrixA, matrixB) {
  const N = matrixA.length;
  const M = matrixB.length;
  const K = matrixB[0].length;

  const result = Array(N)
    .fill(0)
    .map(() => Array(K).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let k = 0; k < M; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

function parseMatrix(input, rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = input[i + 1].split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}
