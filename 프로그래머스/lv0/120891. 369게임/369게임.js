function solution(order) {
    let ans = [...order.toString().matchAll(/[3|6|9]/g)].length
    return ans
}