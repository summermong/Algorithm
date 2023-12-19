const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

for (let i = 1; i <= num; i++) {
  let space = ' '.repeat(num - i);
  let star = '*'.repeat(2 * i - 1);

  console.log(space + star);
}
