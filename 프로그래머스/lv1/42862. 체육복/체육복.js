function solution(n, lost, reserve) {
  let realLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a-b);
  let canBorrow = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a-b);


  for (let i = 0; i < canBorrow.length; i++) {
    let borrower = canBorrow[i];

    if (realLost.includes(borrower - 1)) {
      realLost.splice(realLost.indexOf(borrower - 1), 1);

    } else if (realLost.includes(borrower + 1)) {
      realLost.splice(realLost.indexOf(borrower + 1), 1);
    }
  }

  return n-realLost.length;
}