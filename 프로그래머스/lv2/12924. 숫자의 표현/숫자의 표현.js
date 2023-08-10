function solution(n) {
    let answer = 0;
    let start = 1;
    let end = 1;
    let sum = 1;
    
    while (start <= n) {
        if (sum < n) {
            end++;
            sum += end;
        } else if (sum > n) {
            sum -= start;
            start++;
        } else {
            answer++;
            end++;
            sum += end;
            sum -= start;
            start++
        }
    } return answer
}