function solution(n) {
    let num = 1;
    let answer = 0;
    while (num <= n) {
        let count = 0;
        for (let quotient = 1; quotient <= num; quotient++) {
            if (num % quotient === 0) {
                count += 1;
            } if (count >= 3) {
                answer += 1;
                break
            }
        } num++;
    } return answer
}