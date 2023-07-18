const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const basket = input.shift().split(" ").map(Number)[0];
const count = input.map((v) => v.split(" ").map(Number));

const map = new Map();

for (let i = 1; i <= basket; i++) {
  map.set(i, 0);
}

for (let i = 0; i < count.length; i++) {
  for (let j = count[i][0]; j <= count[i][1]; j++) {
    map.set(j, count[i][2]);
  }
}

const answer = [];

for (let ball of map.values()) {
  answer.push(ball);
}

console.log(answer.join(" "));