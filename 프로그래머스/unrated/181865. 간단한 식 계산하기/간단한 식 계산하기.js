function solution(binomial) {
    let cut = binomial.split(' ')
    for (let i = 0; i < cut.length; i++) {
        if (cut[1] === '+') {
            return Number(cut[0]) + Number(cut[2])
        } else if (cut[1] === '-') {
            return Number(cut[0]) - Number(cut[2])
        } else {
            return Number(cut[0]) * Number(cut[2])
        }
    }
}