function solution(myString, pat) {
    let count = 0;
    let patleng = pat.length;
    
    for (let i = 0; i < myString.length; i++) {
        if (myString.slice(i, patleng+i) === pat) {
            count += 1
        }
    } return count
}