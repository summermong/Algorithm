function solution(cipher, code) {
    let realcipher = "";
    for (let i = code-1; i < cipher.length; i += code) {
        realcipher += cipher[i];
    } return realcipher
}