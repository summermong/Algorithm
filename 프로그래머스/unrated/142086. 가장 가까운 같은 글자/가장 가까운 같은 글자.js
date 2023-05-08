const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    console.log(count)
    return count < 0 ? count : i - count;
  });