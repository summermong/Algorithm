function solution(arr, delete_list) {
    let answer = []
    
    for (let i = 0; i < delete_list.length; i++) {
        if (arr.includes(delete_list[i])) {
            let idx = arr.indexOf(delete_list[i])
            arr.splice(idx, 1)
        }
    } return arr
}