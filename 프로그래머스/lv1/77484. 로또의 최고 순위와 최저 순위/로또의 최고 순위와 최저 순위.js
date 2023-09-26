function solution(lottos, win_nums) {
    
    let rank = { 0:6, 1:6, 2:5, 3:4, 4:3, 5:2, 6:1}
    
    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;
    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]]
}