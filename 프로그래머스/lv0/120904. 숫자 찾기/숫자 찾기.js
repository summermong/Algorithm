function solution(num, k) {
    let str = num.toString();
    if (str.includes(k)) {
        return str.indexOf(k) + 1
    } else {
        return -1
    }
}