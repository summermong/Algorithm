const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = Number(input.shift());
let people = [];

for (let i = 0; i < input.length; i++) {
  people.push(input[i].split(" ").map(Number));
}

let ranking = [];

for (let i = 0; i < num; i++) {
  let rank = 1;
  for (let j = 0; j < num; j++) {
    if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      rank++;
    }
  }
  ranking.push(rank);
}

console.log(ranking.join(" "));
