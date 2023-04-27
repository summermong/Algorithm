function solution(number) {
    let sum = 0;
    
    [...number].map((v) => {
        sum += Number(v)
    })
    
    return sum % 9
}