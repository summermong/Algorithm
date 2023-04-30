function solution(a, d, included) {
    let val = [a]
    let sum = 0
    
    for (let i = 1; i < included.length; i++) {
        a += d
        val.push(a)
    }
    
    for (let i = 0; i < val.length; i++) {
        if (included[i] === true) {
            sum += val[i]
        }
    } return sum
}