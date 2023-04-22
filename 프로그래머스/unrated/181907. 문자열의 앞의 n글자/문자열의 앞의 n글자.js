function solution(my_string, n) {
    let splitMystring = my_string.split('');
    return splitMystring.slice(0, n).join('')
}