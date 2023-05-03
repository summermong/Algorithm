function solution(x1, x2, x3, x4) {
    let xLeft = x1 || x2
    let xRight = x3 || x4
    return xLeft && xRight
}