function solution(strArr) {
  strArr.sort((a, b) => a.length - b.length); // 문자열 길이순으로 정렬
  let count = 1; // 그룹의 개수
  let maxCount = 1; // 가장 많은 문자열을 가진 그룹의 크기

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i].length === strArr[i - 1].length) {
      count++; 
    } else {
      maxCount = Math.max(maxCount, count); 
      count = 1; 
    }
  }

  return Math.max(maxCount, count); 
}
