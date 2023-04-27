function solution(my_string) {
  let answer = [];

  for (let i = 0; i < my_string.length; i++) {
    let cut = my_string.slice(i);
    answer.push(cut);
  }
  return answer.sort();
}
