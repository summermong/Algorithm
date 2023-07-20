const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [h, w] = input.shift().split(" ").map(Number);
const city = input.map((v) => v.split(""));

const map = Array.from(Array(h), () => Array(w).fill(0));

for (let i = 0; i < h; i++) {
  let haveCloud = -1;
  for (let j = 0; j < w; j++) {
    if (city[i][j] === "c") {
      haveCloud = j;
    }
    if (city[i][j] !== "c") {
      if (haveCloud === -1) {
        map[i][j] = -1;
      } else {
        map[i][j] = j - haveCloud;
      }
    }
  }
}

console.log(map.map((v) => v.join(" ")).join("\n"));