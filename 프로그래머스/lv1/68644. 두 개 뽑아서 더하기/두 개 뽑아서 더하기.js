function solution(numbers) {
  let answer = [];
  let answer2 = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let ele = numbers[i] + numbers[j];
      answer.push(ele);
    }
  }
  
  answer.sort((a, b) => a - b);
  
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== answer[i + 1]) {
      answer2.push(answer[i]);
    }
  }
  
  return answer2;
}
