function solution(code) {
  let ret = "";
  let mode = 0;

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      mode = mode === 0 ? 1 : 0;
      continue;
    }

    if (mode === 0 && idx % 2 === 0) {
      ret += code[idx];
    } else if (mode === 1 && idx % 2 === 1) {
      ret += code[idx];
    }
  }

  return ret || "EMPTY";
}
