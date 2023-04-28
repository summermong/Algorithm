function solution(num_list, n) {
    let forward = num_list.slice(n)
    let backward = num_list.slice(0, n)
    return forward.concat(backward)
}