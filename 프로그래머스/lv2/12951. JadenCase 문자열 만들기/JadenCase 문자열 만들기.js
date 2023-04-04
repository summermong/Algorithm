function solution(s) {
    let sLower = s.toLowerCase()
    let sArry = Array.from(sLower)
    for (let i = 0; i < sArry.length; i++) {
        if (sArry[i] === ' ' && sArry[i+1]) {
            let upper = sArry[i+1].toUpperCase()
            sArry.splice(i+1, 1, upper)
        } else if (i === 0 || sArry[i-1] === ' ') {
            let upper = sArry[i].toUpperCase()
            sArry.splice(i, 1, upper)
        } 
    } return sArry.join('')
}