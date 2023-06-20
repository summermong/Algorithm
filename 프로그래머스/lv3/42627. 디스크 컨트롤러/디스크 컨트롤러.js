function solution(jobs) {
    let waitingTime = 0;
    let idx = 0;
    let currentTime = 0;
    
    // 요청 시점으로 정렬
    jobs.sort((a, b) => a[0] - b[0])
    
    const priorityQueue = []
    
    // 아직 처리되지 않은 작업이 남아 있거나 우선순위 큐에 대기중인 작업이 있을 경우
    while (idx < jobs.length || priorityQueue.length !== 0) {
        // 아직 처리되지 않은 작업 중 현재 시간 이전에 들어온 작업들을 우선순위 큐에 삽입
        if (jobs.length > idx && currentTime >= jobs[idx][0]) {
            priorityQueue.push(jobs[idx++])
            // 우선순위 큐에서는 작업의 소요 시간 순으로 정렬
            priorityQueue.sort((a, b) => a[1] - b[1])
            continue
        }
        // 우선순위 큐에 대기중인 작업이 있을 경우
        if (priorityQueue.length !== 0) {
            currentTime += priorityQueue[0][1]
            waitingTime += currentTime - priorityQueue[0][0]
            priorityQueue.shift();
        } else {
            currentTime = jobs[idx][0]
        }
    } return parseInt(waitingTime / jobs.length)
}