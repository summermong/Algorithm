function solution(num, k) {
    let str = num.toString();
    let ind = str.indexOf(k)
    if (ind === -1) {
        return ind
    } else {
        return ind+1
    }
}