const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
const arr = Array.from({length:n}, () => Array(m).fill(0));

let x = 0, y = 0;
let dir = 0;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
arr[x][y] = 1;

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < m;
}



for (let i = 2; i <= n * m; i++){
    while(true){
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (isRange(nx, ny) && arr[nx][ny] === 0){
            x = nx;
            y = ny;
            arr[x][y] = i;
            break;
        }else{
            dir = (dir + 1) % 4;
        }
    }
}

arr.forEach(row =>{
    console.log(row.join(' '))
})