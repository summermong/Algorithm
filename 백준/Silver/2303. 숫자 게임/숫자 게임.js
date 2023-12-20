const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input.shift());
let players = input.map((v) => v.split(' ').map((v) => Number(v)));

function calculateLastDigitSum(cards) {
  return cards.reduce((sum, card) => (sum + card) % 10, 0);
}

function calculation(player) {
  let maxLastDigitSum = -1;
  let winner = -1;

  for (let i = 0; i < player.length; i++) {
    const player = players[i];
    for (let j = 0; j < player.length - 2; j++) {
      for (let k = j + 1; k < player.length - 1; k++) {
        for (let l = k + 1; l < player.length; l++) {
          const currentSum = calculateLastDigitSum([
            player[j],
            player[k],
            player[l],
          ]);
          if (
            currentSum > maxLastDigitSum ||
            (currentSum === maxLastDigitSum && i > winner)
          ) {
            maxLastDigitSum = currentSum;
            winner = i;
          }
        }
      }
    }
  }
  return winner + 1;
}

const result = calculation(players);
console.log(result);
