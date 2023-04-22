function solution(num_str) {
    let sum = 0;
    let splitNumstr = num_str.split('')
    for (let i = 0; i < splitNumstr.length; i++) {
        sum += Number(splitNumstr[i])
    }
    return sum
}