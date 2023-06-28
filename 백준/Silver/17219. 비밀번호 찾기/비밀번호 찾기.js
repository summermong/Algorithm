const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const siteNum = input[0].split(" ");

const sitePassword = new Map();

for (let i = 1; i <= siteNum[0]; i++) {
  let [site, password] = input[i].split(" ");
  sitePassword.set(site, password);
}

let wantFindPassword = input.slice(-siteNum[1]);
let answer = [];

for (let i = 0; i < wantFindPassword.length; i++) {
  if (sitePassword.has(wantFindPassword[i])) {
    answer.push(sitePassword.get(wantFindPassword[i]));
  }
}

console.log(answer.join("\n"));