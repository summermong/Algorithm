function solution(numbers) {
    numbers.sort(function(a, b) {
        return b - a;
    });
    var biggest = numbers[0];
    var bigger = numbers[1];
    var answer = biggest * bigger;
    return answer
} 