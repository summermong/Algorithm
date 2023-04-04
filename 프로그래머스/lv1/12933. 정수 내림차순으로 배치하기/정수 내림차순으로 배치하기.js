function solution(n) {
    let nString = n.toString().split('').map(Number)
    return (+nString.sort((a, b) => b-a).join(''))
}