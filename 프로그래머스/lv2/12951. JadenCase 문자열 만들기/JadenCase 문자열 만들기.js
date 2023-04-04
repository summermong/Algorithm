function solution(s) {
  let sLower = s.toLowerCase();
  let sArry = Array.from(sLower);

  // 첫 번째 문자가 알파벳이 아닐 때 대비한 플래그
  let isFirstChar = true;

  for (let i = 0; i < sArry.length; i++) {
    if (sArry[i] === " ") {
      // 다음 문자가 존재하는 경우에만 대문자로 변환
      if (i + 1 < sArry.length) {
        let upper = sArry[i + 1].toUpperCase();
        sArry.splice(i + 1, 1, upper);
      }
      // 다음 문자가 없는 경우는 처리하지 않고 다음 루프로 넘어감
    } else {
      // 첫 번째 문자인 경우 대문자로 변환
      if (isFirstChar || (i > 0 && sArry[i - 1] === " ")) {
        let upper = sArry[i].toUpperCase();
        sArry.splice(i, 1, upper);
      }
      // 첫 번째 문자가 아닌 경우는 플래그를 false로 설정
      isFirstChar = false;
    }
  }

  return sArry.join("");
}
