function solution(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
