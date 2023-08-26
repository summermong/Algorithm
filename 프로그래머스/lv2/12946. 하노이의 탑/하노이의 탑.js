function solution(n) {
    let count = []
    
    function hanoi (n, start, end, via) {
        if (n === 1) {
            count.push([start, end])
            return
        } 
        hanoi (n-1, start, via, end)
        count.push([start, end])
        hanoi (n-1, via, end, start)
    }
    hanoi (n, 1, 3, 2)
    return count
}