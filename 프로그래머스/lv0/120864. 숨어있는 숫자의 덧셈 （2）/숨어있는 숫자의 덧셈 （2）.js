function solution(my_string) {
    let sum = 0;
    let Newmy_string = my_string.replace(/[A-z]/g, " ").split(' ')
    for (let i = 0; i < Newmy_string.length; i++) {
        if (!isNaN(Newmy_string[i])) {
            sum += Newmy_string[i]*1
        }
    }
    return sum
}