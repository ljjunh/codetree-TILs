const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let maxGold = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k <= n; k++) {
      let gold = 0;

      for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
          if (Math.abs(i - x) + Math.abs(j - y) <= k && grid[x][y] === 1)
            gold++;
        }
      }

      const cost = k ** 2 + (k + 1) ** 2 - gold * m;

      if (cost <= 0) maxGold = Math.max(gold, maxGold);
    }
  }
}

console.log(maxGold);