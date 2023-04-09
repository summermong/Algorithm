function solution(n) {
  let nThree = n.toString(3).split("").reverse().join("");
  let nTen = parseInt(nThree, 3);
  return nTen;
}