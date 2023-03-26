function solution(my_string) {
    let str = my_string.split("");
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length+1; j++) {
            if (str[i] == str[j]) {
                str.splice(j, 1);
                j--;
            } 
        } 
    } return str.join('')
}

