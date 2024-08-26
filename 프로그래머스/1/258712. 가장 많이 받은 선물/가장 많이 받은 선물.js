function solution(friends, gifts) {
    const n = friends.length;
    const giftRecord = Array(n).fill().map(() => Array(n).fill(0));
    const giftIndex = Object.fromEntries(friends.map(friend => [friend, 0]));
    
    // 선물 기록 및 선물 지수 계산
    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ');
        const i = friends.indexOf(giver);
        const j = friends.indexOf(receiver);
        giftRecord[i][j]++;
        giftIndex[giver]++;
        giftIndex[receiver]--;
    });
    
    // 다음 달 선물 계산
    const nextMonthGifts = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (giftRecord[i][j] > giftRecord[j][i]) {
                nextMonthGifts[i]++;
            } else if (giftRecord[i][j] < giftRecord[j][i]) {
                nextMonthGifts[j]++;
            } else {
                if (giftIndex[friends[i]] > giftIndex[friends[j]]) {
                    nextMonthGifts[i]++;
                } else if (giftIndex[friends[i]] < giftIndex[friends[j]]) {
                    nextMonthGifts[j]++;
                }
            }
        }
    }
    
    return Math.max(...nextMonthGifts);
}