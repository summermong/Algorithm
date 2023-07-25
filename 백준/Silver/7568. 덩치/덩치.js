const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = Number(input.shift());
let people = input.map((v) => v.split(" ").map((v) => Number(v)));
let ranking = [];

for (let i = 0; i < num; i++) {
  let rank = 0;
  for (let j = 0; j < num; j++) {
    if (i === j) continue;

    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      rank++;
    }
  }
  ranking.push(rank + 1);
}

console.log(ranking.join(" "));
