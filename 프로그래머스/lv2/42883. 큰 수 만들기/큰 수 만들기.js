function solution(number, k) {
  const arr = number.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (k > 0 && stack[stack.length - 1] < arr[i]) {
      stack.pop();
      k--;
    }
    stack.push(arr[i]);
  }
  if (stack.length > arr.length - k) {
    return stack.slice(0, stack.length - k).join("");
  }
  return stack.join("");
}