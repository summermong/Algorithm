const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let grades = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalGrade = 0;
let totalNum = 0;

for (const line of input) {
  const [sub, score, grade] = line.split(" ");

  if (grade !== "P") {
    totalGrade += Number(score) * grades[grade];
    totalNum += Number(score);
  }
}

console.log(totalGrade / totalNum);