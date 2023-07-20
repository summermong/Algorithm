const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const num = [
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0],
  ], // 0
  [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ], // 1
  [
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
  ], // 2
  [
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
  ], // 3
  [
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0],
  ], // 4
  [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
  ], // 5
  [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ], // 6
  [
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ], // 7
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ], // 8
  [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0],
  ], // 9
];

function printLCD(s, digit) {
  for (let r = 0; r < 5; r++) {
    if (r % 2 === 0) {
      for (let i = 0; i < digit.length; i++) {
        const d = parseInt(digit[i]);

        process.stdout.write(" ");
        for (let j = 0; j < s; j++) {
          num[d][r][1] === 1
            ? process.stdout.write("-")
            : process.stdout.write(" ");
        }
        process.stdout.write(" ");
        process.stdout.write(" ");
      }
      console.log();
    } else {
      for (let t = 0; t < s; t++) {
        for (let i = 0; i < digit.length; i++) {
          const d = parseInt(digit[i]);

          num[d][r][0] === 1
            ? process.stdout.write("|")
            : process.stdout.write(" ");
          for (let j = 0; j < s; j++) {
            process.stdout.write(" ");
          }
          num[d][r][2] === 1
            ? process.stdout.write("|")
            : process.stdout.write(" ");
          process.stdout.write(" ");
        }
        console.log();
      }
    }
  }
}

const s = Number(input[0]);
const pattern = input[1];

printLCD(s, pattern);