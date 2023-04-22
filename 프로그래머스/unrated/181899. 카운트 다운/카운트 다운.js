function solution(start, end) {
    let answer = []
    for (let i = end; i <= start; i++) {
        answer.push(i)
    }
    return answer.reverse()
}