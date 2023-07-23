const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let step = 0;

while (num > 0) {
  step++;
  num = num - step;
}

const up = [];
const down = [];

for (let i = 0; i < step; i++) {
  up.push(i + 1);
  down.push(step - i);
}

if (step % 2 === 0) {
  console.log(`${up[num + step - 1]}/${down[num + step - 1]}`);
} else {
  console.log(`${down[num + step - 1]}/${up[num + step - 1]}`);
}
