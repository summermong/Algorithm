function solution(price) {
    var result = 0;
    if (price < 100000) {
        result = price
    } if (100000 <= price && price < 300000) {
        result = parseInt(price * 0.95)
    } else if (300000 <= price && price < 500000) {
        result = parseInt(price * 0.9) 
    } else if (price >= 500000) {
        result = parseInt(price * 0.8)
    } return result
}