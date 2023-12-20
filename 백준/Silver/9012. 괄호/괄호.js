const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input.shift());
let psList = input.map((v) => v.trim());

for (let i = 0; i < num; i++) {
  const ps = psList[i];
  let stack = [];

  for (let j = 0; j < ps.length; j++) {
    if (ps[j] === '(') {
      stack.push('(');
    } else {
      if (stack.length === 0) {
        console.log('NO');
        break;
      }
      stack.pop();
    }

    if (j === ps.length - 1) {
      if (stack.length === 0) {
        console.log('YES');
      } else {
        console.log('NO');
      }
    }
  }
}
