function solution(n) {
    let a = Math.sqrt(n);
    let b = Math.floor(a);
    if (b*b === n) {
        return 1
    } else {
        return 2
    }
}