const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = num; i >= 1; i--) {
  console.log('*'.repeat(i).padStart(num));
}
