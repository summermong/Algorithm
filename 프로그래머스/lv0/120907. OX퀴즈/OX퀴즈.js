function solution(quiz) {
    let answer = []
    for (let i = 0; i < quiz.length; i++) {
        let expression = quiz[i].split(' ')
        if (expression[1] === '-') {
            parseInt(expression[0]) - parseInt(expression[2]) === parseInt(expression[4]) ? answer.push("O") : answer.push("X")
        } else if (expression[1] === '+') {
            parseInt(expression[0]) + parseInt(expression[2]) === parseInt(expression[4]) ? answer.push("O") : answer.push("X")
        }
    } return answer
        
}