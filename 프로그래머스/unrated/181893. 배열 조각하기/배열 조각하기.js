function solution(arr, query) {
    let i = 0
    while (i < query.length) {
        if (i % 2 === 0) {
            let back = query[i]
            let cut = arr.splice(back+1, arr.length)
            i++;
        } else {
            let back = query[i]
            let cut = arr.splice(0, back)
            i++;
        }
    } return arr
}