function solution(jobs) {
  const len = jobs.length;
  let answer = 0;
  let currentTime = 0;
  let totalWaitingTime = 0;

  // 작업의 요청 시간과 작업 시간을 기준으로 정렬
  jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  while (jobs.length > 0) {
    let index = -1;
    let minTime = 1001; // 최대 작업 소요시간보다 큰 초기값

    // 현재 시간 이전에 요청된 작업들 중에서 가장 작업 소요시간이 짧은 작업 선택
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i][0] <= currentTime && jobs[i][1] < minTime) {
        minTime = jobs[i][1];
        index = i;
      }
    }

    // 선택된 작업이 없는 경우 현재 시간을 1 증가시킴
    if (index === -1) {
      currentTime++;
      continue;
    }

    // 현재 시간보다 작업이 요청된 시간이 늦을 경우 대기 시간 누적
    if (currentTime < jobs[index][0]) {
      totalWaitingTime += jobs[index][0] - currentTime;
      currentTime = jobs[index][0];
    }

    // 해당 작업의 요청부터 종료까지 걸린 시간을 누적하여 answer에 추가
    answer += currentTime - jobs[index][0] + jobs[index][1];

    // 현재 시간을 작업 소요시간만큼 증가
    currentTime += jobs[index][1];

    // 선택한 작업 제거
    jobs.splice(index, 1);
  }

  return Math.floor(answer / len);
}
