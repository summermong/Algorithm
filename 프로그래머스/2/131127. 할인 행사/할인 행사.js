function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const slice = discount.slice(i, i + 10);

    let isPossible = true;

    for (let j = 0; j < want.length; j++) {
      const product = want[j];
      const quantity = number[j];

      if (slice.filter((item) => item === product).length < quantity) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      answer += 1;
    }
  }

  return answer;
}