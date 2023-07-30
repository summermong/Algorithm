const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const numOfOrder = Number(input.shift());
let deque = [];
let answer = [];

for (let i = 0; i < numOfOrder; i++) {
  let [order, num] = input[i].split(" ");

  switch (order) {
    case "push_front":
      deque.unshift(Number(num));
      break;

    case "push_back":
      deque.push(Number(num));
      break;

    case "pop_front":
      answer.push(deque.length === 0 ? -1 : deque.shift());
      break;

    case "pop_back":
      answer.push(deque.length === 0 ? -1 : deque.pop() || -1);
      break;

    case "size":
      answer.push(deque.length);
      break;

    case "empty":
      answer.push(deque.length === 0 ? 1 : 0);
      break;

    case "front":
      answer.push(deque.length === 0 ? -1 : deque[0]);
      break;

    case "back":
      answer.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
      break;
  }
}

console.log(answer.join('\n'));