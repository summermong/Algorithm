const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = [];
const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of croatianAlphabets) {
  let regex = new RegExp(alphabet, "g");
  input = input.replace(regex, " ");
}

console.log(input.split("").length);
