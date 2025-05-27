const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let maxPoint = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    let point =
      grid[i][j] + grid[i + 1][j] + grid[i][j + 1] + grid[i + 1][j + 1];

    maxPoint = Math.max(
      maxPoint,
      point - grid[i][j],
      point - grid[i + 1][j],
      point - grid[i][j + 1],
      point - grid[i + 1][j + 1]
    );
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m - 2; j++) {
    let point = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];

    maxPoint = Math.max(maxPoint, point);
  }
}

for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m; j++) {
    let point = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];

    maxPoint = Math.max(maxPoint, point);
  }
}

console.log(maxPoint);
