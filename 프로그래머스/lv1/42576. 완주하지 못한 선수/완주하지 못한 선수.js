function solution(participant, completion) {
    let map = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        let player = participant[i]
        let finished = completion[i]
        
        map.set(player, (map.has(player) ? map.get(player) : 0) +1 )
        map.set(finished, (map.has(finished) ? map.get(finished) : 0) -1)
    }
    
    for (let [k, v] of map) {
        if (v > 0) {
            return k
        }
    }
    
}
