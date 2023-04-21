function solution(str1, str2) {
  let answer = "";
  let i = 0;
  while (i < str1.length) {
    answer += str1[i] + str2[i];
    i++;
  }
  return answer;
}