function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);
    arr.sort((a, b) => a - b);
    answer.push(Number(arr.splice(commands[i][2] - 1, 1)));
  }
  return answer;
}