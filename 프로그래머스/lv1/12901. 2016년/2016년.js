function solution(a, b) {
    let day = new Date(2016, a-1, b)
    return day.toString().slice(0, 3).toUpperCase()
}