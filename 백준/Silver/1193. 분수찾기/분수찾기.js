const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let step = 0;

while (num > 0) {
  step++;
  num = num - step;
}

const isEvenStep = step % 2 === 0;

let up, down;
if (isEvenStep) {
  up = step;
  down = 1;
  while (num < 0) {
    up--;
    down++;
    num++;
  }
} else {
  up = 1;
  down = step;
  while (num < 0) {
    up++;
    down--;
    num++;
  }
}

console.log(`${up}/${down}`);
