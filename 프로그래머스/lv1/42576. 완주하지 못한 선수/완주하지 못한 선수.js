function solution(participant, completion) {
  let fail = "";

  completion.push("");
    
  let arr1 = participant.sort();
  let arr2 = completion.sort();
  

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        console.log(arr1[i])
        console.log(arr2[i])
      fail = arr1[i];
        console.log(fail)
    }
  }
  return fail;
}