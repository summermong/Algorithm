function solution(num_list) {
    let odd = ''
    let even = ''
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {
            odd += String(num_list[i])
        } else {
            even += String(num_list[i])
        }
    } return Number(odd) + Number(even)
}