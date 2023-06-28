const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const num = input[0].split(" ");

let stack = [];
let answer = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].includes("push")) {
    let pushNum = input[i].split(" ");
    stack.push(Number(pushNum[1]));
  } else if (input[i] === "top") {
    stack.length === 0 ? answer.push(-1) : answer.push(stack[stack.length - 1]);
  } else if (input[i] === "size") {
    answer.push(stack.length);
  } else if (input[i] === "empty") {
    stack.length === 0 ? answer.push(1) : answer.push(0);
  } else if (input[i] === "pop") {
    stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
  }
}

console.log(answer.join("\n"));