function solution(num) {
    let count = 0;
    while (num !== 1) {
        if (count >= 500) { // 500번 이상 반복되면 -1 반환
            return -1;
        }
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        count += 1;
    }
    return count;
}