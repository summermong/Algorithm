const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let lowerChar = input.join("").toLowerCase();

let frequencyArr = Array(26).fill(0);

for (let i of lowerChar) {
  let code = i.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    let idx = code - 97;
    frequencyArr[idx]++;
  }
}

let count = 0;
let frequencyChar = "";

for (let i = 0; i < frequencyArr.length; i++) {
  if (frequencyArr[i] > count) {
    count = frequencyArr[i];
    frequencyChar = String.fromCharCode(i + 97).toUpperCase();
  } else if (frequencyArr[i] === count) {
    frequencyChar = "?";
  }
}

console.log(frequencyChar);
