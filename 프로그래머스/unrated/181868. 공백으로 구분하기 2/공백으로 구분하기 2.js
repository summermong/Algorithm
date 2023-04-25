function solution(my_string) {
    let answer = ''
    let space = my_string.split(' ')
    for (let i = 0; i < space.length; i++) {
        if (space[i] !== '') {
            answer += space[i] + ' '
        }
    } return answer.trimEnd().split(' ')
}