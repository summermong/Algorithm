const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const numFactors = parseInt(input[0]);
const factors = input[1].split(' ').map(Number);

const minFactor = Math.min(...factors);
const maxFactor = Math.max(...factors);

const result = minFactor * maxFactor;
console.log(result);
