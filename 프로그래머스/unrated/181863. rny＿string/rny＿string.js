function solution(rny_string) {
    let regex = /m/g;
    let answer = rny_string.replace(regex, 'rn')
    return answer
}