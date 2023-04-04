function solution(n) {
    let nString = n.toString().split("").map(Number)
    let arr = [];
    
    for (let i = 0; i < nString.length; i++) {
        arr.unshift(nString[i])
    }

    return arr
}