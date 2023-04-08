function solution(phone_number) {
  let leng = phone_number.length - 4;
  let lastNumber = [...phone_number].splice(leng, 4);

  return "*".repeat(leng) + lastNumber.join("");
}