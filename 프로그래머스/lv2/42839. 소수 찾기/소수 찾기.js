function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

function dfs(set, nums, str) {
    if (nums.length >= 1) {
        for (let i = 0; i < nums.length; i++) {
            let newStr = str + nums[i];
            let newNums = [...nums];
            newNums.splice(i, 1);
            
            if (isPrime(Number(newStr))) {
                set.add(Number(newStr));
            }
            
            dfs(set, newNums, newStr)
        }
    }
}

function solution(numbers) {
    let nums = numbers.split("")
    let set = new Set();
    dfs(set, nums, "")
    
    return set.size;
}