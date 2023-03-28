function solution(i, j, k) {
    let arr = [];
    for (let a = i; i <= j; i++) {
        arr.push(i)
    } 
    
    let sum = 0;
    arr.map((e) => String(e)).join('').split('').map((e) => {
        if (e == k) {
            sum += 1
        }
    })
    return sum
}