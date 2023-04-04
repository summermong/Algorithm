function solution(s){
    let countY = 0;
    let countP = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'y' || s[i] === 'Y') {
            countY += 1
        } else if (s[i] === 'p' || s[i] === 'P') {
            countP += 1
        }
    }

    if (countP === countY || countP === 0 && countY === 0) {
        return true
    } else {
        return false
    }
}