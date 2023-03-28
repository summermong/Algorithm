function isAlpha(c) {
  return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}

function isDigit(c) {
  return c >= "0" && c <= "9";
}

function solution(my_string) {
  let answer = 0;

  let num = "";

  for (let i = 0; i < my_string.length; i++) {
    if (isDigit(my_string[i])) {
      num += my_string[i];
    }
    if (isAlpha(my_string[i]) || i === my_string.length - 1) {
      if (num !== "") {
        answer += parseInt(num);
        num = "";
      }
    }
  }
  return answer;
}
