const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const a = Array(n).fill(0).map(() => Array(n).fill(0));
const type = Array(n).fill(0).map(() => Array(n).fill(0));

// Please Write your code here.

const dy1 = [-2, -1, 1, 2];
const dx1 = [0, 0, 0, 0];

const dy2 = [-1, 0, 1, 0];
const dx2 = [0, 1, 0, -1];

const dy3 = [-1, -1, 1, 1];
const dx3 = [-1, 1, 1, -1];

let mx = -1e9;

function boom(y, x, dy, dx){
    for(let d = 0; d < 4; d++){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        a[ny][nx] = 1;
    }
}

function count(){

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            a[i][j] = 0;
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(type[i][j] === 1){
                a[i][j] = 1
                boom(i, j, dy1, dx1);
            }else if(type[i][j] === 2){
                a[i][j] = 1
                boom(i, j, dy2, dx2);
            }else if(type[i][j] === 3){
                a[i][j] = 1
                boom(i, j, dy3, dx3);
            }
        }
    }

    let cnt = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(a[i][j]) cnt++;
        }
    }
    return cnt;
}

function go(idx){
    if(idx === pos.length){
        mx = Math.max(mx, count());
        return;
    }

    for(let i = 1; i <= 3; i++){
        const[y, x] = pos[idx]
        type[y][x] = i;
        go(idx + 1);
        type[y][x] = 0;
    }

}

const pos = [];

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(grid[i][j]) pos.push([i, j]);
    }
}

go(0);
console.log(mx);