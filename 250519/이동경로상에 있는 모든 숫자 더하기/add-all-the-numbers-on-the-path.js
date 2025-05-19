const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.
const dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1];
let dir = 0;
let x = Math.floor(n / 2), y = Math.floor(n / 2);
let res = board[x][y];

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < n;
}

for (let i = 0; i < t; i++){
    const c = commands[i];
    if (c === 'R'){
        dir = (dir + 1) % 4;
    }
    if (c === 'L'){
        dir = (dir + 4 - 1) % 4;
    }
    if (c === 'F'){
        nx = x + dx[dir];
        ny = y + dy[dir];
        if (isRange(nx, ny)){
            x = nx;
            y = ny;
            res += board[x][y];
        }
    }
}

console.log(res);