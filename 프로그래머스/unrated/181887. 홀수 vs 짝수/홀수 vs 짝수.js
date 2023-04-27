function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    num_list.map((v, i) => {
        i % 2 === 0 ? oddSum += v : evenSum += v
    })
    return oddSum > evenSum ? oddSum : evenSum
}