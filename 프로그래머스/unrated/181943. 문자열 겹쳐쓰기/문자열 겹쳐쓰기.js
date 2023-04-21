function solution(my_string, overwrite_string, s) {
  let left = my_string.slice(0, s);
  let right = my_string.slice(left.length + overwrite_string.length);
  return left + overwrite_string + right;
}