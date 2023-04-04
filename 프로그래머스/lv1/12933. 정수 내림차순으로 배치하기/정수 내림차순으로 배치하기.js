function solution(n) {
    let nString = n.toString().split('').map(Number)
    return Number(nString.sort((a, b) => b-a).join(''))
}