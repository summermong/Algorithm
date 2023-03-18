function solution(my_string, n) {
    let answer = Array.from(my_string).map(item => item.repeat(n)).join("");
    return answer
}