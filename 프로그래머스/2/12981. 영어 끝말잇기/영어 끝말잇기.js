function solution(n, words) {
    let answer = [0, 0];
    let usedWords = new Set();
    
    for (let i = 0; i < words.length; i++) {
        if (i !== 0 && (words[i - 1].slice(-1) !== words[i].charAt(0) || usedWords.has(words[i]))) {
            answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
            break;
        } else {
            usedWords.add(words[i]);
        }
    }
    
    return answer;
}
