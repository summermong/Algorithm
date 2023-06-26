function solution(numbers) {
  let nums = numbers.map((v) => String(v)).sort((a, b) => b + a - (a + b));
  let answer = nums.join("");
  let countZero = nums.filter((e) => "0" === e).length;

  if (answer.length === countZero) {
    return "0";
  } else {
    return answer;
  }
}