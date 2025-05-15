const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const arr = Array.from(Array(n), ()=>Array(m).fill(0))
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < m;
}

let dir = 0;
let x = 0;
let y = 0;
arr[x][y] = 1;

for (let i = 2; i <= n * m; i++){
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    
    if (!isRange(nx, ny) || arr[nx][ny] !== 0){
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    }
    x = nx;
    y = ny;
    arr[x][y] = i;
}

for (let i = 0; i < n; i++){
    console.log(arr[i].join(' '))
}