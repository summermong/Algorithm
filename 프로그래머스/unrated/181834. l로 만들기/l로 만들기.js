function solution(myString) {
    let re = /[abcdefghijk]/g
    let answer = myString.replace(re, 'l')
    return answer
}