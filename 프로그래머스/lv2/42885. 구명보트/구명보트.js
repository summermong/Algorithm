function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b); // 오름차순으로 정렬

  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = people.length - 1; // 가장 무거운 사람의 인덱스

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // 가장 가벼운 사람과 가장 무거운 사람을 함께 태웠으므로 left 포인터 증가
      right--; // right 포인터 감소
    } else {
      right--; // 가장 무거운 사람만 태웠으므로 right 포인터 감소
    }
    answer++; // 구명보트 수 증가
  }

  return answer;
}
