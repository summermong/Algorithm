const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const passwords = fs.readFileSync(filePath).toString().trim().split('\n');

function isAcceptable(password) {
  let consecutiveVowels = 0;
  let consecutiveConsonants = 0;
  let consecutiveChars = 1;
  let lastChar = '';
  let hasVowel = false;

  for (let i = 0; i < password.length; i++) {
    let currentChar = password[i];

    if ('aeiou'.includes(currentChar)) {
      consecutiveVowels++;
      consecutiveConsonants = 0;
      hasVowel = true;
    } else {
      consecutiveConsonants++;
      consecutiveVowels = 0;
    }

    if (
      currentChar === lastChar &&
      currentChar !== 'e' &&
      currentChar !== 'o'
    ) {
      consecutiveChars++;
    } else {
      consecutiveChars = 1;
    }

    if (
      consecutiveVowels === 3 ||
      consecutiveConsonants === 3 ||
      consecutiveChars === 2
    ) {
      return false;
    }

    lastChar = currentChar;
  }

  return hasVowel;
}

function evaluatePasswords(passwords) {
  for (let password of passwords) {
    if (password === 'end') break;
    if (isAcceptable(password)) {
      console.log(`<${password}> is acceptable.`);
    } else {
      console.log(`<${password}> is not acceptable.`);
    }
  }
}

evaluatePasswords(passwords);
