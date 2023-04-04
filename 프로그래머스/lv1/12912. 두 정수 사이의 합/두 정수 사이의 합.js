function solution(a, b) {
    let max = Math.max(a, b)
    let min = Math.min(a, b)
    let minus = max - min
    
    let sum = 0;
    for (let i = min; min <= max; min++) {
        sum += min
    }

    if (minus === 0) {
        sum = max
    }

    return sum
    
}