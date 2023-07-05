function solution(progresses, speeds) {
  const stack = []; // 스택
  const answer = []; // 결과 배열

  // 작업의 진도와 개발 속도를 순차적으로 처리
  for (let i = 0; i < progresses.length; i++) {
    const remaining = Math.ceil((100 - progresses[i]) / speeds[i]); // 남은 작업 일수 계산

    if (stack.length === 0 || stack[stack.length - 1] < remaining) {
      // 스택이 비어있거나, 현재 작업의 남은 일수가 스택의 가장 위에 있는 일수보다 큰 경우
      stack.push(remaining); // 스택에 현재 작업의 남은 일수 추가
      answer.push(1); // 배포되는 기능 개수 1로 초기화
    } else {
      // 현재 작업의 남은 일수가 스택의 가장 위에 있는 일수보다 작거나 같은 경우
      answer[answer.length - 1]++; // 기능 개수 1 증가
    }
  }

  return answer;
}
