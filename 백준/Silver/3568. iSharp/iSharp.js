let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [pre, ...vari] = input;

// 변수 선언문에서 콤마와 세미콜론을 제거합니다.
vari = vari.map((v) => v.replace(",", "").replace(";", ""));

const word = [];

// 변수 선언문에서 변수명을 추출하고, 나머지를 변수형으로 처리합니다.
for (let i = 0; i < vari.length; i++) {
  const variableName = vari[i]
    .split("")
    .filter((v) => /[a-zA-Z]/.test(v))
    .join("");
  const variableType = vari[i]
    .split("")
    .filter((v) => /[^a-zA-Z]/.test(v))
    .reverse()
    .join("")
    .replace(/\]\[/g, "[]");
  word.push(variableName);
  vari[i] = variableType;
}

let answer = [];
for (let i = 0; i < vari.length; i++) {
  answer.push(`${pre}${vari[i]} ${word[i]};`);
}

console.log(answer.join("\n"));
