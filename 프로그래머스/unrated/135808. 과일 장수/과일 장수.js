function solution(k, m, score) {
    const sortScore = score.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < sortScore.length; i+=m) {
        const box = sortScore.slice(i, i + m);
        if (box.length === m) {
            answer += box[m - 1] * m;
        }
    }
    return answer;
}
