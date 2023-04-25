function solution(n) {
  let n2 = n.toString(2);
  let n2length = [...n2].filter((v) => v === "1").length;

  for (let i = n + 1; i <= 1000000; i++) {
    let i2 = i.toString(2);
    let i2length = [...i2].filter((v) => v === "1").length;

    if (n2length === i2length) {
      return i;
    }
  }
}