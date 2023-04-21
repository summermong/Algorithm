function solution(array) {
  let count = 0;
  let arr = array.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "7") {
      count++;
    }
  }
  return count;
}