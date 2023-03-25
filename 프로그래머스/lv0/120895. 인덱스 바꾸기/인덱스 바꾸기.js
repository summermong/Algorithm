function solution(my_string, num1, num2) {
    let ans = [...my_string];
    ans.splice(num1, 1, my_string[num2]);
    ans.splice(num2, 1, my_string[num1]);
    return ans.join("");
}