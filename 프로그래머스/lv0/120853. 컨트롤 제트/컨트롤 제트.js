function solution(s) {
  let sum = 0;
  let sVer2 = s.split(" ");
  for (let i = 0; i < sVer2.length; i++) {
    if (sVer2[i] !== "Z") {
      sum += Number(sVer2[i]);
    } else {
      sum -= Number(sVer2[i - 1]);
    }
  }
  return sum;
}