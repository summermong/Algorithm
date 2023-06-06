function solution(progresses, speeds) {
  let needSpeed = progresses.map((v) => {
    return 100 - v;
  });
  let needDay = speeds.map((v, i) => {
    return Math.ceil(needSpeed[i] / v);
  });

  for (let i = 0; i < needDay.length; i++) {
    if (needDay[i + 1] < needDay[i]) {
      needDay.splice(i + 1, 1, needDay[i]);
    }
  }

  let counts = [];
  let currentCount = 1;

  for (let i = 0; i < needDay.length - 1; i++) {
    if (needDay[i] === needDay[i + 1]) {
      currentCount++;
    } else {
      counts.push(currentCount);
      currentCount = 1;
    }
  }
  counts.push(currentCount);

  return counts;
}