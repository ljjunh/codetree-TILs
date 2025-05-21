const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map((v) => [Number(v)]));
const moveNums = input[1 + n].split(' ').map(Number);

// Please Write your code here.

const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

function find(x){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(const n of grid[i][j]){
                if(x === n) return[i, j];
            }
        }
    }
}

function next(y, x){
    mx = -1;
    pos = [-1, -1];
    for(let d = 0; d < 8; d++){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        for(const n of grid[ny][nx]){
            if(mx < n){
                mx = n;
                pos = [ny, nx];
            }
        }
    }
    return pos;
}

function move(num, y, x, ny, nx){
    let flag = 0;
    let cnt = 0;
    for(const n of grid[y][x]){
        if(n === num) flag = 1;
        if(flag){
            grid[ny][nx].push(n);
            cnt++;
        }
    }
    while(cnt--){
        grid[y][x].pop();
    }
}

for(let i = 0; i < m; i++){
    const num = moveNums[i];
    const [y, x] = find(num);
    const [ny, nx] = next(y, x);
    if(ny !== -1 && nx !== -1) move(num, y, x, ny, nx);
}

const res = []

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(grid[i][j].length === 0) res.push('None');
        else res.push(grid[i][j].reverse().join(' '));
    }
}

console.log(res.join('\n'));