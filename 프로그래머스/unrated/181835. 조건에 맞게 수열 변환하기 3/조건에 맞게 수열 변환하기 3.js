function solution(arr, k) {
    return arr.map(i => k % 2 === 0 ? i+k : i*k)
}