function solution(s) {
  let arr = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let ele = answer.lastIndexOf(s.substr(i, 1));
    answer.push(s.substr(i, 1));
    if (ele === -1) {
      arr.push(ele);
    } else {
      arr.push(arr.length - ele);
    }
  }
  return arr;
}