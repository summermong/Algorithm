function solution(array, n) {
    return array[array.sort((a,b) => a-b).map((v) => Math.abs(v-n)).indexOf(Math.min(...array.map((v) => Math.abs(v-n))))]
}