function solution(brown, yellow) {
  let ans2 = [];

  for (let i = 1; i * i <= yellow; i++) {
    if (yellow % i === 0) {
      if (yellow / i >= i) {
        ans2.push([yellow / i, i]);
      }
    }
  }

  for (let i = 0; i < ans2.length; i++) {
    if (ans2[i][0] * 2 + ans2[i][1] * 2 === brown - 4) {
      return [ans2[i][0] + 2, ans2[i][1] + 2];
    }
  }
}
