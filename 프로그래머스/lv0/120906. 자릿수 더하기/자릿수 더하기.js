function solution(n) {
    let num = String(n);
    let mapfn = (i) => Number(i);
    let newArr = Array.from(num, mapfn);
    let sum = 0;
    for (var i = 0; i < newArr.length; i++) {
        sum += newArr[i]
    }
    return sum
}