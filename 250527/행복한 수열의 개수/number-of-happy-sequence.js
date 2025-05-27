const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let result = 0;

// 가로 확인
for (let i = 0; i < n; i++) {
  let maxCount = 1;
  let count = 1;

  for (let j = 1; j < n; j++) {
    grid[i][j - 1] === grid[i][j] ? count++ : (count = 1);

    maxCount = Math.max(maxCount, count);

    if (maxCount >= m) {
      result++;
      break;
    }
  }
}

// 세로 확인
for (let i = 0; i < n; i++) {
  let maxCount = 1;
  let count = 1;

  for (let j = 1; j < n; j++) {
    grid[j - 1][i] === grid[j][i] ? count++ : (count = 1);

    maxCount = Math.max(maxCount, count);

    if (maxCount >= m) {
      result++;
      break;
    }
  }
}

console.log(result);
