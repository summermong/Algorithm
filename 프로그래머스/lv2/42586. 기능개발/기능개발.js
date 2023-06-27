function solution(progresses, speeds) {
  const answer = []; 
  const queue = []; 

  
  for (let i = 0; i < progresses.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 0;
  let maxDay = 0; 

  while (queue.length > 0) {
    const day = queue.shift(); 

    if (day > maxDay) {
      if (count > 0) {
        answer.push(count);
        count = 0;
      }
      maxDay = day;
    }

    count++;
  }

  answer.push(count);

  return answer;
}