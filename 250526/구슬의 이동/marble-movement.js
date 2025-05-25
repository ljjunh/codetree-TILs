const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, t, k] = input[0].split(' ').map(Number);
const marbles = [];

const moveIdx = {
    'U': 0,
    'D': 1,
    'L': 2,
    'R': 3,
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

for (let i = 1; i <= m; i++) {
  const [r, c, d, v] = input[i].split(' ');
  marbles.push([Number(r) - 1, Number(c) - 1, moveIdx[d], Number(v)]);
}
// Please Write your code here.

let grid = Array(n).fill().map(() => Array(n).fill().map(() => []));
let nexGrid = Array(n).fill().map(() => Array(n).fill().map(() => []));

function next (y, x, v, d) {
    for(let i = 0; i < v; i++){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n){
            d ^= 1;
            ny = y + dy[d];
            nx = x + dx[d];
        }
        y = ny;
        x = nx;
    }

    return [y, x, d];
}


for(let i = 0; i < m; i++){
    const [r, c, d, v] = marbles[i];
    grid[r][c].push([v, i + 1, d]);
}

for(let l = 0; l < t; l++){
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            nexGrid[i][j] = [];
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            grid[i][j].forEach(([v, idx, d]) => {
                const [ny, nx, nd] = next(i, j, v, d);
                nexGrid[ny][nx].push([v, idx, nd]);
            })
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(nexGrid[i][j].length >= k){
                nexGrid[i][j].sort((a, b) => (a[0] - b[0]) * -1 || (a[1] - b[1]) * -1);
                while(nexGrid[i][j].length > k) nexGrid[i][j].pop();
            }
        }
    }
    
    grid = nexGrid;

}

let res = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(grid[i][j].length > 0) res += grid[i][j].length;
    }
}

console.log(res);