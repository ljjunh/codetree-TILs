const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const arr = Array.from({ length: n }, () => Array(m).fill(0));
let x = 0, y = 0;
let dir = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
arr[x][y] = 'A';

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < m;
}

for (let i = 1; i < n * m; i++){

    while(true){
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        
        if (isRange(nx, ny) && arr[nx][ny] === 0){
            x = nx;
            y = ny;
            arr[x][y] = String.fromCharCode((i % 26) + 'A'.charCodeAt(0));
            break;
        }else{
            dir = (dir + 1) % 4;
        }
    }
}

arr.forEach((row) => {
    console.log(row.join(' '))
})
