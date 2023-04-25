function solution(my_string, alp) {
    let upper = alp.toUpperCase()
    return my_string.replaceAll(alp, upper)
}