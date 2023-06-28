const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0].split(" ");

let answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "0") {
    answer.push(Number(input[i]));
  } else {
    answer.pop();
  }
}

console.log(answer.reduce((pre, cur) => pre + cur, 0));