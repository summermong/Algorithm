function solution(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return 1
    } else if (arr1.length < arr2.length) {
        return -1
    } else {
        let arr1sum = 0;
        let arr2sum = 0;
        
        for (let i = 0; i < arr1.length; i++) {
            arr1sum += arr1[i]
        }
        
        for (let i = 0; i < arr2.length; i++) {
            arr2sum += arr2[i]
        }
        
        return arr1sum > arr2sum ? 1 :
        arr1sum < arr2sum ? -1 : 0
    }
}