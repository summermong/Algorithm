function solution(a, b, c, d) {
    let answer = [a, b, c, d].sort();

    //모든 수가 같을 때
    if (answer[0] === answer[3]) {
        return answer[0]*1111
    }

    //세 수가 같을 때
    if (answer[0] === answer[1] && answer[1] === answer[2]) {
        if (answer[3] !== answer[0]) {
            return Math.pow(10 * answer[0] + answer[3], 2)
        }
    } else if (answer[1] === answer[2] && answer[2] === answer[3]) {
        if (answer[0] !== answer[1]) {
            return Math.pow(10 * answer[1] + answer[0], 2)
        }
    }

    //두 수가 같을 때
    if ((answer[0] === answer[1] && answer[2] === answer[3]) ||
        (answer[0] === answer[2] && answer[1] === answer[3])) {
        return (answer[0] + answer[3]) * Math.abs(answer[0] - answer[3]);
    }

    //두 수가 같고 나머지가 다를 때
    if (answer[0] === answer[1] && answer[2] !== answer[3] && answer[2] !== answer[1]) {
        return answer[2] * answer[3]
    }

    if (answer[1] === answer[2] && answer[0] !== answer[3] && answer[0] !== answer[2]) {
        return answer[0] * answer[3]
    }

    if (answer[2] === answer[3] && answer[0] !== answer[1] && answer[0] !== answer[2]) {
        return answer[0] * answer[1]
    }

    //모든 수가 다를 때
    if (answer[0] < answer[1] && answer[1] < answer[2] && answer[2] < answer[3]) {
    return answer[0];
}
}
