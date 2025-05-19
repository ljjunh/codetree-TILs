const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.trim().split(' ').map(Number));
// Please Write your code here.

// 0-상, 1-우, 2-하, 3-좌
const dy = [-1, 0 , 1, 0];
const dx = [0, 1, 0, -1];

let mx = -1e9;

function go(y, x, d, cnt){

    let ny = y + dy[d];
    let nx = x + dx[d];

    if(ny < 0 || ny >= n || nx < 0 || nx >= n){
        mx = Math.max(mx, cnt + 1);
        return
    }

    if(grid[ny][nx] === 1){
        if(d === 0 || d === 2){
            go(ny, nx, (d + 1) % 4, cnt+1);
        }else if(d === 1 || d === 3){
            go(ny, nx, (d + 4 - 1) % 4, cnt+1);
        }
    }else if(grid[ny][nx] === 2){
        if(d === 0 || d === 2){
            go(ny, nx, (d + 4 - 1) % 4, cnt+1);
        }else if(d === 1 || d === 3){
            go(ny, nx, (d + 1) % 4, cnt+1);
        }
    }else if(grid[ny][nx] === 0){
        go(ny, nx, d, cnt+1);
    }

}

for(let j = 0; j < n; j++){
    go(-1, j, 2, 0);
}

for(let i = 0; i < n; i++){
    go(i, n, 3, 0);
}

for(let j = 0; j < n; j++){
    go(n, j, 0, 0);
}

for(let i = 0; i < n; i++){
    go(i, -1, 1, 0);
}

console.log(mx);