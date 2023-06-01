function solution(s) {
    return [...s].map((v, i) => {
        let a = s.slice(0, i).lastIndexOf(v);
        return a < 0 ? a : i-a
    })
}