function solution(n) {
    let nSQRT = Math.ceil(Math.sqrt(n))
    if (nSQRT >= 0 && nSQRT * nSQRT === n) {
        return Math.pow(nSQRT+1, 2)
    } else {
        return -1
    }
}

