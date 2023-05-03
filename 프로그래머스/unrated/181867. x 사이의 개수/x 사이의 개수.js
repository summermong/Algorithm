function solution(myString) {
    let splitX = myString.split('x')
    return splitX.map((v =>
        v.length
    ))
}