function solution(answers) {
  let answer = [];
  let person1 = 0;
  let person2 = 0;
  let person3 = 0;

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

  if (person1 == person2 && person2 == person3) {
    answer.push(1, 2, 3);
  } else if (person1 > person2 && person1 > person3) {
    answer.push(1);
  } else if (person2 > person1 && person2 > person3) {
    answer.push(2);
  } else if (person3 > person1 && person3 > person2) {
    answer.push(3);
  } else if (person1 == person2 && person1 !== person3) {
    answer.push(1, 2);
  } else if (person2 == person3 && person2 !== person1) {
    answer.push(2, 3);
  } else if (person3 == person1 && person3 !== person2) {
    answer.push(3, 1);
  }
  return answer.sort((a, b) => a - b);
}