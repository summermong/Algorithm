function solution(picture, k) {
let ans = [];
for (let i = 0; i < picture.length; i++) {
let twice = picture[i].split("");
let answer = twice.map((v) => v.repeat(k)).join("");
ans.push(...Array(k).fill(answer));
}
return ans;
}

