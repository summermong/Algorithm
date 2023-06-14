function solution(n, lost, reserve) {
  let realLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
  let canLend = reserve
    .filter((v) => !lost.includes(v))
    .sort((a, b) => a - b);

  for (let i = 0; i < canLend.length; i++) {
    let lender = canLend[i];

    if (realLost.includes(lender - 1)) {
      realLost.splice(realLost.indexOf(lender - 1), 1);
    } else if (realLost.includes(lender + 1)) {
      realLost.splice(realLost.indexOf(lender + 1), 1);
    }
  }

  return n - realLost.length;
}