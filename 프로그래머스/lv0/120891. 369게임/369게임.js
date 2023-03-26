function solution(order) {
    let str = order.toString();
    let regex = /[369]/g;
    let matches = str.match(regex);
    if (matches === null) {
        return 0;
    }
    return matches.length;
}