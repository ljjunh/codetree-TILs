const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let y = 0;
let x = k - 1;

while(true){
    let flag = 0;

    for(let i = 0; i < m; i++){
        let ny = y + 1;
        let nx = x + i;
        if(grid[ny][nx] || ny === n){
            flag = 1;
            break;
        };
        
    }
    if(flag) break;
    y++;
}

for(let i = 0; i < m; i++){
    grid[y][x + i] = 1;
}

console.log(grid.map((row) => row.join(' ')).join('\n'));