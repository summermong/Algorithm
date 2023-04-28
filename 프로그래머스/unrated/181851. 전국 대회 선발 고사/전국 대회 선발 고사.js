function solution(rank, attendance) {
    let students = []
    let answer = []
    
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === true) {
            students.push(rank[i])
        }
    } 
    students.sort((a, b) => a-b)
    let result = students.slice(0, 3)
    
    for (let i = 0; i < result.length; i++) {
        let ranking = rank.indexOf(result[i])
        answer.push(ranking)
    } 
    
    return 10000 * answer[0] + 100 * answer[1] + answer[2]
}