function solution(myString) {
    let answer = []
    let splitX = myString.split('x')
    splitX.map((v) => {
        answer.push(v.length)
    })
    return answer
}