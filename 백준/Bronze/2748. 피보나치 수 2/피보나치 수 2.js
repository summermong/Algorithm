const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = BigInt(fs.readFileSync(filePath).toString().trim());

function fibonacci(n) {
  let a = 0n;
  let b = 1n;
  for (let i = 2n; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

const result = fibonacci(n);
console.log(result.toString());
