function solution(my_string) {
    let lower = my_string.toLowerCase().split('')
    lower.sort();
    return lower.join('')
}