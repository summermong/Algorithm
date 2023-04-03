function solution(n) {
    let i = 1;
    let arr = [];
    while (i <= n) {
        if (n % i === 1) {
            arr.push(i)      
        }
        i++
    }
    return Math.min(...arr)
}