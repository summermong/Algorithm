const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log('*'.repeat(i).padEnd(num) + '*'.repeat(i).padStart(num));
}

for (let i = num - 1; i >= 1; i--) {
  console.log('*'.repeat(i).padEnd(num) + '*'.repeat(i).padStart(num));
}
