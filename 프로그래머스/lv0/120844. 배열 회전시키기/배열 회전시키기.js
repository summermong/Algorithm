function solution(numbers, direction) {
    if (direction === 'right') {
        let tmp = numbers[numbers.length-1];
        numbers.splice(-1, 1);
        numbers.unshift(tmp);
        return numbers
    } else {
        let tmp = numbers[0];
        numbers.splice(0, 1);
        numbers.push(tmp);
        return numbers
    }
}