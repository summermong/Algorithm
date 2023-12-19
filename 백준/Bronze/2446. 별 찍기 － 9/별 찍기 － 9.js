const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = num; i > 1; i--) {
  let downSpace = ' '.repeat(num - i);
  let downStar = '*'.repeat(2 * i - 1);

  console.log(downSpace + downStar);
}

for (let i = 1; i <= num; i++) {
  let upSpace = ' '.repeat(num - i);
  let upStar = '*'.repeat(2 * i - 1);

  console.log(upSpace + upStar);
}
