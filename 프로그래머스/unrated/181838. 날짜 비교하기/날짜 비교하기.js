function solution(date1, date2) {
    let answer1 = ""
    date1.map((v) => answer1 += v)
    
    let answer2 = ""
    date2.map((v) => answer2 += v)
    
    return Number(answer1) < Number(answer2) ? 1 : 0
}