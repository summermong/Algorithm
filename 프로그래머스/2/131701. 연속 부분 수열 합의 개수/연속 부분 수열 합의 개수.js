function solution(elements) {
    const set = new Set();
    const leng = elements.length;
    const arr = [...elements, ...elements.slice(0, leng-1)];
    
    for (let i = 1; i <= leng; i++) {
        for (let j = 0; j < leng; j++) {
            const sum = arr.slice(j, j+i).reduce((a, b) => a+b, 0);
            set.add(sum);
        }
    }
  return set.size;
}