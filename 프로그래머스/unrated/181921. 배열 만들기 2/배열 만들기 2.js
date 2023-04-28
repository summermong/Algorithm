function solution(l, r) {
    let result = [];
    let num = Math.ceil(l / 5) * 5; // 5로 나누어 떨어지는 l 이상의 가장 작은 정수
    while (num <= r) {
        if (String(num).match(/^[05]+$/)) {
            result.push(num);
        }
        num += 5;
    }
    return result.length > 0 ? result : [-1];
}
