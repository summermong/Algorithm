function solution(myString, pat) {
    let myStringLower = myString.toLowerCase();
    let patLower = pat.toLowerCase();
    return myStringLower.includes(patLower) ? 1 : 0
}