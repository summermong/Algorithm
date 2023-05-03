function solution(my_string, s, e) {
    let left = my_string.slice(0, s)
    let right = my_string.slice(e+1)
    let middle = my_string.split('').slice(s, e+1).reverse().join('')
    return left + middle + right
}