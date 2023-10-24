function solution(order) {
    let sum = 0;
    order.forEach(v => v.includes("anything") || v.includes("americano") ? sum += 4500 : sum += 5000) 
    return sum;
}