function solution(topping) {
    let leftType = new Set();
    let leftCount = Array(topping.length);
    
    for (let i = 0; i < topping.length; i++) {
        leftType.add(topping[i]);
        leftCount[i] = leftType.size;
    }
    
    let rightType = new Set();
    let answer = 0;
    
    for (let i = topping.length - 1; i > 0; i--) {
        rightType.add(topping[i]);
        
        if (leftCount[i - 1] === rightType.size) {
            answer++;
        }
    }
    return answer
}