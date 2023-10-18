function solution(s) {
    let answer = 0;
    const stack = [];

    const isCorrect = (str) => {
        const pairs = { '(': ')', '[': ']', '{': '}' };
        for (let char of str) {
            if (char === '[' || char === '(' || char === '{') {
                stack.push(char);
            } else {
                if (stack.length === 0) {
                    return false;
                } else {
                    const top = stack.pop();
                    if (pairs[top] !== char) {
                        return false;
                    }
                }
            }
        }
        return stack.length === 0;
    };

    for (let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i);
        if (isCorrect(rotated)) {
            answer++;
        }
    }

    return answer;
}