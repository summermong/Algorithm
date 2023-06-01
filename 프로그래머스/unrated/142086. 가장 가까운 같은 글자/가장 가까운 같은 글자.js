function solution(s) {
    let arr = []
    let answer = [] //정답 반환할 배열
    
    for (let i = 0; i < s.length; i++) {
        let ele = arr.lastIndexOf(s.substr(i, 1))
        
        // i = 0, 1, 2, 3, 4, 5
        // ele = -1, -1, -1, 1, 2, 3
        
        arr.push(s.substr(i, 1))
        
        // arr = ['b', 'a', 'n', 'a', 'n', 'a']
        
        if (ele === -1) {
            answer.push(ele)
        } else {
            answer.push(answer.length-ele)
        }
        // answer = [-1, -1, -1, 3-1, 4-2, 5-3 ]
    } return answer
}