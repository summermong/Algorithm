function solution(brown, yellow) {
  let carpet = [];

  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      if (yellow / i >= i) {
        carpet.push([yellow / i, i]);
      }
    }
  }

  for (let i = 0; i < carpet.length; i++) {
    if (carpet[i][0] * 2 + carpet[i][1] * 2 === brown - 4) {
      return [carpet[i][0] + 2, carpet[i][1] + 2];
    }
  }
}
