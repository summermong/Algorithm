const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [num, curiousCountry] = input.shift().split(" ").map(Number);
let countries = {};

for (let country of input) {
  const [idx, g, s, b] = country.split(" ").map(Number);
  countries[idx] = [g, s, b];
}

let rank = 1;

for (let i = 1; i <= num; i++) {
  if (i === curiousCountry) {
    continue;
  }

  const [g1, s1, b1] = countries[curiousCountry];
  const [g2, s2, b2] = countries[i];

  if (
    g1 < g2 ||
    (g1 === g2 && s1 < s2) ||
    (g1 === g2 && s1 === s2 && b1 < b2)
  ) {
    rank++;
  }
}

console.log(rank);
