function solution(answers) {
  let answer = [];
  let person1 = 0, person2 = 0, person3 = 0


  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) {
      person1 += 1;
    }
    if (answers[i] === two[i % two.length]) {
      person2 += 1;
    }
    if (answers[i] === three[i % three.length]) {
      person3 += 1;
    }
  }
    let max = Math.max(person1, person2, person3)
    
    if (person1 === max) { answer.push(1) }
    if (person2 === max) { answer.push(2) }
    if (person3 === max) { answer.push(3) }
    
    return answer
}