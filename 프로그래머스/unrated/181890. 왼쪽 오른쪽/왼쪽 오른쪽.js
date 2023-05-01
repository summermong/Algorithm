function solution(str_list) {
    let lIdx = str_list.indexOf('l') // 0
    let rIdx = str_list.indexOf('r') // -1

    if (str_list.includes('l') && str_list.includes('r')) {
        return lIdx > rIdx ? str_list.slice(rIdx + 1) : str_list.slice(0, lIdx)
    } else if (str_list.includes('l')) {
        return str_list.slice(0, lIdx)
    } else if (str_list.includes('r')) {
        return str_list.slice(rIdx + 1)
    } else {
        return []
    }
}