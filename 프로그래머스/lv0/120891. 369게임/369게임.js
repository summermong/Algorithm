function solution(order) {
    let count = 0;
    let num = order;
    while (num > 0) {
        let digit = num % 10;
        if (digit === 3 || digit === 6 || digit === 9) {
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}