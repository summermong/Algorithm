const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const grades = {
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

let totalGradePoints = 0;
let totalCredits = 0;

for (const line of input) {
  const [subject, score, grade] = line.split(" ");

  if (grade !== "P") {
    const gradeValue = grades[grade];
    totalGradePoints += Number(score) * gradeValue;
    totalCredits += Number(score);
  }
}

const gpa = totalGradePoints / totalCredits;
console.log(gpa.toFixed(6));
