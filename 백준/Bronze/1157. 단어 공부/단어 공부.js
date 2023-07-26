const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let lowerChar = input.join("").toLowerCase();
let alphabetArr = Array(26).fill(0);

for (let i = 0; i < lowerChar.length; i++) {
  let code = lowerChar.charCodeAt(i);
  // 알파벳 소문자 a ~ z
  let idx = code - 97;
  alphabetArr[idx]++;
}

let mostFrequent = 0;
let frequentAlphabet = "";

for (let i = 0; i < alphabetArr.length; i++) {
  if (alphabetArr[i] > mostFrequent) {
    mostFrequent = alphabetArr[i];
    frequentAlphabet = String.fromCharCode(i + 97).toUpperCase();
  } else if (alphabetArr[i] === mostFrequent) {
    frequentAlphabet = "?";
  }
}

console.log(frequentAlphabet);
