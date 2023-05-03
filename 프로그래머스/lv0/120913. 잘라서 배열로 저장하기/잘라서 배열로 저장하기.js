function solution(my_str, n) {
    let answer = []
    
    for (let i = 0; i < my_str.length; i++) {
        answer.push(my_str.slice(i*n, n*(i+1)))
    }
    return answer.filter((v) => v !== '')
}