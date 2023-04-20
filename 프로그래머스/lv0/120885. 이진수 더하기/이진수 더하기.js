function solution(bin1, bin2) {
  let bin = parseInt(bin1, 2) + parseInt(bin2, 2);
  return bin.toString(2);
}