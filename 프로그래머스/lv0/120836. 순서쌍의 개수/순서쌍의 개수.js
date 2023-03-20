function solution(n) {
    var answer1 = [];
    for (var i = 1; i <= n; i++) {
        var answer2 = parseInt(n / i);
        if (i * answer2 === n) {
            answer1.push([i, answer2])
        }
    }
    return answer1.length;
}