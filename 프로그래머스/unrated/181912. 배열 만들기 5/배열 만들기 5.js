function solution(intStrs, k, s, l) {
    const answer = []
    intStrs.forEach(a => {
        const part = a.slice(s, s+l)
        const num = Number(part)
        if (num > k) {
            answer.push(num)
        }
    })
    
    return answer
}