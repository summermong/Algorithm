function solution(keymap, targets) {
  let keymapping = {};
  let answer = [];

  // 키패드 구성
  for (let i = 0; i < keymap.length; i++) {
    let pad = keymap[i];
    for (let j = 0; j < pad.length; j++) {
      let padValue = pad[j];
      if (!keymapping[padValue]) {
        keymapping[padValue] = [i + 1, j + 1];
      } else if (j + 1 < keymapping[padValue][1]) {
        keymapping[padValue][1] = j + 1;
      }
    }
  }

  // targets 자르기
  for (let i = 0; i < targets.length; i++) {
    let target = targets[i].split("");
    let sum = 0;
    for (let j = 0; j < target.length; j++) {
      let word = target[j];
      if (keymapping[word]) {
        sum += keymapping[word][1];
      } else {
        sum = -1;
        break;
      }
    }
    answer.push(sum);
  }
  return answer;
}