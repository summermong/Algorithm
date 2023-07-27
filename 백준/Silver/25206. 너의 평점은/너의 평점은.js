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

let subjectArr = [];
let scoreArr = [];
let gradeArr = [];

let totalGrade = 0;
let totalNum = 0;

for (let i = 0; i < input.length; i++) {
  let [sub, scr, gra] = input[i].split(" ");
  subjectArr.push(sub);
  scoreArr.push(scr);
  gradeArr.push(gra);
}

for (let i = 0; i < gradeArr.length; i++) {
  if (gradeArr[i] !== "P") {
    totalGrade += Number(scoreArr[i] * grades[gradeArr[i]]);
    totalNum += Number(scoreArr[i]);
  }
}

console.log((totalGrade / totalNum).toFixed(6));
