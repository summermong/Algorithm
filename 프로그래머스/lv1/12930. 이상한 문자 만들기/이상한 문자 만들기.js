function solution(s) {
  let sWord = s.split(" ");
  let answer = "";

  for (let i = 0; i < sWord.length; i++) {
    let sAlpha = sWord[i].split("");
    for (let j = 0; j < sAlpha.length; j++) {
      if (j === 0 || j % 2 === 0) {
        answer += sAlpha[j].toUpperCase();
      } else {
        answer += sAlpha[j].toLowerCase();
      }
    }
    answer += " ";
  }
  return answer.slice(0, -1);
}