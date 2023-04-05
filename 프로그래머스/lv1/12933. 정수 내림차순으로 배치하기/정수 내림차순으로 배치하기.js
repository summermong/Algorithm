function solution(n) {
    let nString = n.toString().split('').map(Number)
    return (parseInt(nString.sort((a, b) => b-a).join('')))
}