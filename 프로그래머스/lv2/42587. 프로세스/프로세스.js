function solution(priorities, location) {
  let answer = 0;
  let queue = [...priorities];

  while (true) {
    let currentProcess = queue.shift();

    if (queue.find(priority => priority > currentProcess)) {
      queue.push(currentProcess);
    } else {
      answer++;
      if (location === 0) {
        break;
      }
    }

    if (location === 0) {
      location = queue.length - 1;
    } else {
      location--;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2));  // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0));  // 5
console.log(solution([6, 1, 5, 3, 2], 1));  // 3
