function solution(my_string) {
    let sum = 0;
    my_string = my_string.replace(/[A-z]/g, " ").split(" ")
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== "") {
            sum += Number(my_string[i])
        }
    } return sum
}