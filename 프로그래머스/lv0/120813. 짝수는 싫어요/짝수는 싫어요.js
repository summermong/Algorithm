function solution(n) {
    var answer = [];
    for (var i = 1; i <= Math.ceil(n/2); i++) {
        var odd = 2*i-1;
        answer.push(odd);
    } return answer
}