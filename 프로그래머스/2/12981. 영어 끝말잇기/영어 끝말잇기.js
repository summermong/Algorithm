function solution(n, words) {
    let answer = [0, 0];
    // 중복 단어를 처리할 집합
    let usedWords = new Set();
    
    // 현재 단어가 이전 단어의 마지막 글자로 시작하지 않거나 이미 사용된 단어인 경우
    for (let i = 0; i < words.length; i++) {
        if (i !== 0 && (words[i - 1].slice(-1) !== words[i][0] || usedWords.has(words[i]))) {
            // 틀린 사람의 번호와 라운드
            answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
            break;
        } else {
            // 사용된 단어로 추가하기
            usedWords.add(words[i]);
        }
    }
    return answer;
}
