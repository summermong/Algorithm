function solution(num_list, n) {
    let ans = [];
    for (let i = 0; i < num_list.length; i++) {
        let a = num_list.splice(i, n);
        ans.push(a);
        i--;
    } return ans
}