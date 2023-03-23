function solution(n) {
    let a = Math.floor(Math.sqrt(n));
    if (a*a === n) {
        return 1
    } else {
        return 2
    }
}