function solution(phone_book) {
  let answer = true;
  let arrNum = [...phone_book];

  arrNum.sort();

  for (let i = 0; i < arrNum.length - 1; i++) {
    let curNumLeng = arrNum[i].length;
    let nextNum = arrNum[i + 1].substr(0, curNumLeng);

    if (arrNum[i] === nextNum) {
      return false;
    }
  }
  return answer;
}