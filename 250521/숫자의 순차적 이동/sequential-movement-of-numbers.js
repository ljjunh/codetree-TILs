const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));

// Please write your code here.

const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
const dx = [0, 1, 1, 1, 0, -1, -1, -1];

function find(x){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === x) return [i, j];
        }
    }
}

function swap(y, x){
    let sy = 0; sx = 0;
    let mx = 0;
    for(let d = 0; d < 8; d++){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        if(mx < grid[ny][nx]){
            mx = grid[ny][nx];
            sy = ny; sx = nx;
        }
    }

    [grid[y][x], grid[sy][sx]] = [grid[sy][sx], grid[y][x]];
}

for(let t = 0; t < m; t++){
    for(let k = 1; k <= n * n; k++){
        const[y, x] = find(k);
        swap(y, x);
    }
}

console.log(grid.map((row) => row.join(' ')).join('\n'));