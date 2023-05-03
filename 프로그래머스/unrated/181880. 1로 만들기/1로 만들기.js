function solution(num_list) {
    let i = 0;
    let count = 0
    
    while (i < num_list.length) {
        if (num_list[i] !== 1) {
            if (num_list[i] % 2 === 0) {
                num_list[i] = num_list[i] / 2
                count++
            } else {
                num_list[i] = (num_list[i] - 1) / 2
                count++
            }
        } else {
            i++
        }
    } return count
}
