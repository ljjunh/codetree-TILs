const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m, y, x] = input[0].split(' ').map(Number);
const directions = input[1].split(' ');

// Please Write your code here.

const dy = [0, 0, -1, 1];
const dx = [-1, 1, 0, 0];

const move = {
    'L' : 0,
    'R' : 1,
    'U' : 2,
    'D' : 3,
}

const a = Array(n).fill().map(() => Array(n).fill(0));
y--; x--;

let up = 1;
let front = 2;
let right = 3;

a[y][x] = 6;

for(let i = 0; i < m; i++){
    const d = move[directions[i]];

    const ny = y + dy[d];
    const nx = x + dx[d];

    if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

    y = ny; x = nx;

    if(d === 0) [up, front, right] = [right, front, 7 - up];
    else if(d === 1) [up, front, right] = [7 - right, front, up];
    else if(d === 2) [up, front, right] = [front, 7 - up, right];
    else if(d === 3) [up, front, right] = [7-front, up, right];

    a[y][x] = 7 - up;
}

let sm = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        sm += a[i][j];
    }
}

console.log(sm);