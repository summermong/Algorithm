function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            answer.push(s[i])
        }
    } return answer.sort().join('')
}
console.log(solution("abcabcadc"))
console.log(solution("abdc"))
console.log(solution("hello"))