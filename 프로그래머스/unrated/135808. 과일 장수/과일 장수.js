function solution(k, m, score) {
    let answer = []
    let box = ''
    let sortScore = score.sort((a, b) => a-b).reverse()
    for (let i = 0; i < sortScore.length; i+=m) {
        let box = sortScore.slice(i, m+i)
        if (box.length === m) {
            answer.push(box)
        }
    }
    let sum = 0;
    for (let i = 0; i < answer.length; i++) {
        let min = answer[i][m-1];
        sum += min*(answer[i].length)
    }
    return sum
}