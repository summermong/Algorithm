function solution(my_string) {
    let answer = Array.from(my_string)
    let arr = [];
    for (let i = 0; i < answer.length; i++) {
        if (isNaN(answer[i]) === false) {
            arr.push(Number(answer[i]))
        }
    } return arr.sort()
}