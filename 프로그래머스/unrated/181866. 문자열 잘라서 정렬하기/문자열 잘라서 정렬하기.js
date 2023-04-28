function solution(myString) {
    let xNo = myString.split('x')
    return xNo.filter((v) => v !== '').sort()
}