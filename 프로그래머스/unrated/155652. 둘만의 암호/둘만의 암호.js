function solution(s, skip, index) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    skip.split('').forEach((v) => {
        alphabet.splice(alphabet.indexOf(v), 1)
    })
    
    const answer = s.split('').map((v) => {
        return alphabet[(alphabet.indexOf(v) + index) % alphabet.length]
    }).join('')
    
    return answer
}