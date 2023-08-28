function solution(s) {
  let sArray = Array.from(s);
  let zero = 0;
  let count = 0;
    
    while (sArray.length > 1) {
        let countOne = sArray.filter((item) => item === "1").length
        zero += sArray.length - countOne
        sArray = Array.from(countOne.toString(2))
        count ++
    }
    return [count, zero]
}