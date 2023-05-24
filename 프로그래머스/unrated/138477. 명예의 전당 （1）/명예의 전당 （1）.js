function solution(k, score) {
    const honors = []
    const answer = [];

    for(let i = 0; i < score.length; i++){
        honors.push(score[i])
        const min = honors.sort((a, b) => b - a).slice(0, k)
        answer.push(min[min.length-1])
    }

    return answer;
}
