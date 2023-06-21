function solution(brown, yellow) {
  let ans = [];

  for (let i = 1; i <= yellow; i++) {
    if (i / yellow === 0) {
      ans.push([1, 1]);
    } else if (parseInt(yellow / i) * i === yellow) {
      ans.push([yellow / i, i]);
    }
  }

  let ans2 = [];

  for (let i = 0; i < ans.length; i++) {
    if (ans[i][0] >= ans[i][1]) {
      ans2.push([ans[i][0], ans[i][1]]);
    }
  }

  let ans3 = [];

  for (let i = 0; i < ans2.length; i++) {
    if (ans2[i][0] * 2 + ans2[i][1] * 2 + 4 === brown) {
      ans3.push(ans2[i][0], ans2[i][1]);
    }
  }
  return ans3.map((v) => v + 2);
}