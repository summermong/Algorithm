function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    let quotient = parseInt(food[i] / 2);
    let idx = String(i);
    answer += idx.repeat(quotient);
  }
  return answer + "0" + answer.split("").reverse().join("");
}