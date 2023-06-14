function solution(number, k) {
  const arr = number.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      stack.pop();
      k--;
    }
    stack.push(arr[i]);
  }

  stack.splice(stack.length - k, k);

  return stack.join("");
}