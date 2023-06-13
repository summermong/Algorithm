function solution(n, lost, reserve) {
  let lostStudent = lost.filter((v) => !reserve.includes(v)).sort();
  let reserveStudent = reserve.filter((v) => !lost.includes(v)).sort();

  for (let i = 0; i < reserveStudent.length; i++) {
    if (lostStudent.includes(reserveStudent[i] - 1)) {
      lostStudent = lostStudent.filter((v) => v !== reserveStudent[i] - 1);
    } else if (lostStudent.includes(reserveStudent[i] + 1)) {
      lostStudent = lostStudent.filter((v) => v !== reserveStudent[i] + 1);
    }
  }

  return n - lostStudent.length;
}