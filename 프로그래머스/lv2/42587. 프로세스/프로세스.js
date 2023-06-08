function solution(priorities, location) {
  let answer = 0;
  let queue = [...priorities];

  while (queue.length > 0) {
    let currentProcess = queue.shift();

    if (queue.find((priority) => priority > currentProcess)) {
      queue.push(currentProcess);
      console.log(queue);
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