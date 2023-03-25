function solution(array) {
    let arr = [];
    let a = Math.max(...array);
    let b = array.indexOf(a);
    arr.push(a)
    arr.push(b)
    return arr
}