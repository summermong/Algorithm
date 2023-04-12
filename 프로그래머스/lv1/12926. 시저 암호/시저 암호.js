function solution(sentence, num) {
  let arr = "abcdefghijklmnopqrstuvwxyz";
  let arr2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sentenceAlpha = sentence.split("");
  let answer = "";

  for (let i = 0; i < sentenceAlpha.length; i++) {
    if (sentenceAlpha[i] === " ") {
      answer += " ";
    } else {
      if (sentenceAlpha[i] === sentenceAlpha[i].toUpperCase()) {
        let alpha = arr2.indexOf(sentenceAlpha[i]);
        if (alpha + num > 25) {
          answer += arr2[(alpha + num) % 26];
        } else {
          answer += arr2[alpha + num];
        }
      } else {
        let alpha = arr.indexOf(sentenceAlpha[i]);
        if (alpha + num > 25) {
          answer += arr[(alpha + num) % 26];
        } else {
          answer += arr[alpha + num];
        }
      }
    }
  }
  return answer;
}