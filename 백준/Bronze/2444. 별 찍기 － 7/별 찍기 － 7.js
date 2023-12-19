const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = 1; i <= num; i++) {
  let upStar = '*'.repeat(i * 2 - 1);
  let upSpace = ' '.repeat(num - i);

  console.log(upSpace + upStar);
}

for (let i = num - 1; i >= 1; i--) {
  let downStar = '*'.repeat(i * 2 - 1);
  let downSpace = ' '.repeat(num - i);

  console.log(downSpace + downStar);
}
