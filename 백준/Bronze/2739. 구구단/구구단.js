const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let answer = '';

for (let i = 1; i < 10; i++) {
  answer += `${num} * ${i} = ${num * i}` + '\n';
}

console.log(answer.trim());