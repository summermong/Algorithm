function solution(k, score) {
  let honors = [];
  let answer = [];
  let min = 0;

  if (k <= score.length) {
    for (let i = 0; i < k; i++) {
      honors.push(score[i]);
      min = Math.min(...honors);
      answer.push(min);
    }

    for (let i = k; i < score.length; i++) {
      if (score[i] >= min) {
        honors.push(score[i]);
        honors.sort((a, b) => a - b).splice(0, 1);
        answer.push(honors[0]);
      } else if (score[i] < min) {
        honors.sort((a, b) => a - b)
        answer.push(honors[0]);
      }
    }
    return answer;
  } else {
    for (let i = 0; i < score.length; i++) {
      honors.push(score[i]);
      min = Math.min(...honors);
      answer.push(min);
    }
  }
  return answer;
}