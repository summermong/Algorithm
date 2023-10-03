function solution(new_id) {
    let answer = new_id
    .toLowerCase() // 1단계 소문자로 치환
    .replace(/[^\w-_.]/g, "") // 2단계 소문자, 숫자, -, _, . 만 남기기
    .replace(/\.+/g, ".") // 3단계 마침표가 2번 이상 연속이면 1개로 치환
    .replace(/^\.|\.$/g, "") // 4단계 마침표가 처음이나 끝에 있다면 제거
    .padEnd(1, "a") // 5단계 빈 문자열이라면 a를 대입
    .slice(0, 15) // 6단계 길이가 0 ~ 15개의 문자만 남기기
    .replace(/\.$/g, "") // 6단계 후 4단계의 뒷부분과 동일
    return answer.length <= 2 ? 
        answer.padEnd(3, answer[answer.length-1]) : answer // 7단계 길이에 따라 추가 및 반환
}  