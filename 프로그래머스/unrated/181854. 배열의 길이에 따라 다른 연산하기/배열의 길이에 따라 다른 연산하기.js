function solution(arr, n) {
    let answer = []
    if (arr.length % 2 !== 0) {
        let filter = arr.filter((v, i) => {
            i % 2 === 0 ? answer.push(v+n) : answer.push(v)
        })
    } else {
        let filter = arr.filter((v, i) => {
            i % 2 !== 0 ? answer.push(v+n) : answer.push(v)
        })
    } return answer
}
    