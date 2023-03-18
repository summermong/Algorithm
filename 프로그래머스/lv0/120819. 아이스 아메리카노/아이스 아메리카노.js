function solution(money) {
    const price = 5500;
    const coffee = Math.floor(money / price);
    const change = money % price;
    const answer = [];
    answer.push(coffee);
    answer.push(change);
    return answer;
}