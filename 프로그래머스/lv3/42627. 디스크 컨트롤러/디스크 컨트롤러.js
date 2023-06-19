function solution(jobs) {
    let answer = 0;
    let jobsCnt = jobs.length;
    // 요청시간이 빠른 순서대로 정렬하되 작업의 요청시간이 동일한 경우, 소요시간 기준 오름차순 정렬
    let jobQueue = jobs.sort((a, b) => {
        if (a[0] === b[0]) { 
            return a[1] - b[1] 
        } else { 
            return a[0] - b[0]
        };
    });
    let curTime = jobQueue[0][0];
    let waitQueue = [];

    while (jobQueue.length > 0) {
        let job = jobQueue[0];
        // 현재시간이 작업의 요청시간을 지나버렸다면, waitQueue에 작업을 적재
        if (curTime > job[0]) {
            waitQueue.push(job);
            jobQueue.shift();
        // 현재시간이 작업의 요청시간을 지나지 않았다면,
        } else {
            // waitQueue에 작업이 있을 경우 작업 소요시간 기준 오름차순 정렬
            if (waitQueue.length > 0) {
                waitQueue.sort((a, b) => a[1] - b[1]);
                // waitQueue에 있는 작업 '1개'만 처리
                let waitJob = waitQueue.shift();
                curTime += waitJob[1];
                answer += curTime - waitJob[0];
            // waitQueue에 없으면 바로 작업 처리
            } else {
                curTime = job[0] + job[1];
                answer += job[1];
                jobQueue.shift();
            }
        }
        
        if (jobQueue.length === 0 && waitQueue.length > 0) {
            waitQueue.sort((a, b) => a[1] - b[1]);
            while (waitQueue.length > 0) {
                let waitJob = waitQueue.shift();
                curTime += waitJob[1];
                answer += curTime - waitJob[0];
            }
        }
    }
    
    return parseInt(answer / jobsCnt);
}