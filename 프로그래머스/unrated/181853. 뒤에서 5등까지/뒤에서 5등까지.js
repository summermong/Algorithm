function solution(num_list) {
    let minSort = num_list.sort((a, b) => a-b)
    return minSort.slice(0, 5)
}