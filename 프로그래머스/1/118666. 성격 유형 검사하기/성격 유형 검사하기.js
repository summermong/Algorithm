function solution(survey, choices) {
  let answer = '';
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const [leftType, rightType] = survey[i].split('');
    const score = Math.abs(choices[i] - 4);

    if (choices[i] < 4) {
      types[leftType] += score;
    } else if (choices[i] > 4) {
      types[rightType] += score;
    }
  }

  const resultType = Object.keys(types);
  const resultScore = Object.values(types);

  for (let i = 0; i < resultType.length; i += 2) {
    if (resultScore[i] >= resultScore[i + 1]) {
      answer += resultType[i];
    } else {
      answer += resultType[i + 1];
    }
  }
  return answer
}