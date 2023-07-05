function solution(progresses, speeds) {
    const stack = []
    const answer = []
    
    for (let i = 0; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i])
        
        if (stack.length === 0 || stack[stack.length-1] < day) {
            stack.push(day)
            answer.push(1)
        } else {
            answer[answer.length-1]++
        }
    }
    
    return answer

} 