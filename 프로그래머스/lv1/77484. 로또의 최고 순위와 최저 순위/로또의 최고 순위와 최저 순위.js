function solution(lottos, win_nums) {
    
    let rank = { 0:6, 1:6, 2:5, 3:4, 4:3, 5:2, 6:1}
    
    let minCount = lottos.filter(v => win_nums.includes(v)).length; // 일치한 개수(최저)
    let zeroCount = lottos.filter(v => !v).length; // 0의 개수
    const maxCount = minCount + zeroCount; // 일치 + 0 (최고)

    return [rank[maxCount], rank[minCount]]
}