function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i <= absolutes.length; i++) {
    if (signs[i] === true) {
      sum += absolutes[i];
    } else if (signs[i] === false) {
      sum += -absolutes[i];
    }
  }
  return sum;
}