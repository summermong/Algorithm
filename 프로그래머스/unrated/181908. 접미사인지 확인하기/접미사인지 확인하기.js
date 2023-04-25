function solution(my_string, is_suffix) {
    let suffixlength = is_suffix.length;
    let leng = my_string.length - suffixlength;
    return my_string.slice(leng) === is_suffix ? 1 : 0
}