function solution(n) {
    let answer = [];
    for (let i = 1; i < n; i++) {
        answer.push((n-(n-i)) * '*')
    } return answer.join('')
}