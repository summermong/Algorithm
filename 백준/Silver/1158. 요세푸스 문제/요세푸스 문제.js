const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let [num, target] = input.split(" ").map(Number);
let people = [];
let answer = [];

for (let i = 1; i <= num; i++) {
  people.push(i);
}

let idx = 0;
while (people.length > 0) {
  idx = (idx + target - 1) % people.length;
  answer.push(people[idx]);
  people.splice(idx, 1);
}

console.log(`<${answer.join(", ")}>`);
