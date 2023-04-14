function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let wall = (arr1[i] | arr2[i]).toString(2);
    let wallsplit = wall.padStart(n, '0').split("");
    let map = wallsplit.map((v) => (v === "1" ? "#" : " "));
    answer.push(map.join(""));
  }

  return answer;
}
