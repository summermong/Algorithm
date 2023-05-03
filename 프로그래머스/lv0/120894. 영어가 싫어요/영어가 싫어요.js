function solution(numbers) {
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    for (let i = 0; i < words.length; i++) {
        numbers = numbers.replaceAll(words[i], i)
    }
    return parseInt(numbers)
}