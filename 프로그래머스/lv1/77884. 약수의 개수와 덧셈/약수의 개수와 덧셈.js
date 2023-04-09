 function solution(left, right) {
  let sum = 0;

  while (left <= right) {
    let count = [];
    for (let j = 1; j <= left; j++) {
      if (left % j === 0) {
        count.push(j);
      }
    }
    if (count.length % 2 === 0) {
      sum += left;
    } else {
      sum -= left;
    }
    left++;
  }
  return sum;
}