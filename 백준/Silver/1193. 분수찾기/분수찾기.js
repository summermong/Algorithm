const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const x = parseInt(input);
let i = 0;
let cnt = 0;

while (true) {
  i += 1;
  cnt += i;
  if (x <= cnt) {
    break;
  }
}

if (i % 2 === 0) {
  for (let j = 0; j < cnt + 1; j++) {
    if (x === cnt - j) {
      console.log(`${i - j}/${j + 1}`);
      break;
    }
  }
} else {
  for (let f = 0; f < cnt + 1; f++) {
    if (x === cnt - f) {
      console.log(`${f + 1}/${i - f}`);
      break;
    }
  }
}
