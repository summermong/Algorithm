function solution(arr) {
  let X = []
  
  for (let i = 0; i < arr.length; i++) {
      let ele = arr[i];
      for (let j = 0; j < ele; j++) {
          X.push(ele)
      }
  } return X
}
