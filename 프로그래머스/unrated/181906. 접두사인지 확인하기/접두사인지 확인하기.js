function solution(my_string, is_prefix) {
    let prefixlength = is_prefix.length;
    let answer = my_string.slice(0, prefixlength)
    return answer === is_prefix ? 1 : 0
}