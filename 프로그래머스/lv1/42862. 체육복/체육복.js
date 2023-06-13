function solution(n, lost, reserve) {
  let realLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
  let canBorrow = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);

  let answer = n - realLost.length;

  for (let i = 0; i < canBorrow.length; i++) {
    const borrower = canBorrow[i];

    if (realLost.includes(borrower - 1)) {
      realLost.splice(realLost.indexOf(borrower - 1), 1);
      answer++;
    } else if (realLost.includes(borrower + 1)) {
      realLost.splice(realLost.indexOf(borrower + 1), 1);
      answer++;
    }
  }

  return answer;
}
