function solution(lottos, win_nums) {
  let myNumber = lottos.sort((a, b) => a - b);
  let luckyNumber = win_nums.sort((a, b) => a - b);

  let answer = [];
  let score = { 0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

  let same = 0;
  let same2 = 0;

  // 0이 맞았다고 가정할 때 먼저 맞은 갯수
  function maximum(myNumber, luckyNumber) {
    for (let i = 0; i < myNumber.length; i++) {
      for (let j = 0; j < luckyNumber.length; j++) {
        if (myNumber[i] === luckyNumber[j]) {
          same2++;
        }
      }
    }
    let zero = myNumber.filter((v) => v === 0).length;
    return score[zero + same2];
  }

  // 0이 맞지 않았다고 가정할 때 기존 번호와 로또 번호가 일치하는 갯수
  function minimum(myNumber, luckyNumber) {
    for (let i = 0; i < myNumber.length; i++) {
      for (let j = 0; j < luckyNumber.length; j++) {
        if (myNumber[i] === luckyNumber[j]) {
          same++;
        }
      }
    }
    return score[same];
  }

  answer.push(maximum(myNumber, luckyNumber));
  answer.push(minimum(myNumber, luckyNumber));
  return answer;
}