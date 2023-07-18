const fs = require("fs");
const { connected } = require("process");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const order = Number(input.shift());
const code = input.map((v) => v.split(" "));

const opcodes = {
  ADD: "00000",
  ADDC: "00001",
  SUB: "00010",
  SUBC: "00011",
  MOV: "00100",
  MOVC: "00101",
  AND: "00110",
  ANDC: "00111",
  OR: "01000",
  ORC: "01001",
  NOT: "01010",
  MULT: "01100",
  MULTC: "01101",
  LSFTL: "01110",
  LSFTLC: "01111",
  LSFTR: "10000",
  LSFTRC: "10001",
  ASFTR: "10010",
  ASFTRC: "10011",
  RL: "10100",
  RLC: "10101",
  RR: "10110",
  RRC: "10111",
};

let opcodeStr = [];
let rDnum = [];
let rAnum = [];
let rBorCnum = [];

for (let i = 0; i < code.length; i++) {
  const [opcode, rD, rA, rBorC] = code[i];
  opcodeStr.push(opcodes[opcode]);
  rDnum.push(Number(rD).toString(2).padStart(3, "0"));
  rAnum.push(Number(rA).toString(2).padStart(3, "0"));

  if (opcodeStr[i][opcodeStr[i].length - 1] === "0") {
    rBorCnum.push(Number(rBorC).toString(2).padStart(3, "0") + "0");
  } else {
    rBorCnum.push(Number(rBorC).toString(2).padStart(4, "0"));
  }
}

let answer = [];

for (let i = 0; i < opcodeStr.length; i++) {
  answer.push(opcodeStr[i] + "0" + rDnum[i] + rAnum[i] + rBorCnum[i]);
}

console.log(answer.join("\n"));