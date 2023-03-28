function solution(my_string) {
    let a = '';
    let b = [];
    let c = 0;
    for (let i = 0; i < my_string.length; i++) {
        if (isNaN(my_string[i])) {
            my_string = my_string.replace(my_string[i], ' ')
        }
    } a = my_string.split(' ')
    for (let i of a) {
        if (i !== '') {
            b.push(i)
        }
    }
    for (let i = 0; i < b.length; i++) {
        c += Number(b[i])
    } return c
}