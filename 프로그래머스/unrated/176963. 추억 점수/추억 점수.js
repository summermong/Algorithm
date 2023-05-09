function solution(name, yearning, photo) {
  let dic = {};
  for (let i = 0; i < name.length; i++) {
    dic[name[i]] = yearning[i];
  }

  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      score += dic[photo[i][j]] || 0;
    }
    answer.push(score);
  }
  return answer;
}