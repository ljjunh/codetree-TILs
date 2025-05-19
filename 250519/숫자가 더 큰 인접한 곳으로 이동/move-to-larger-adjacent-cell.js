const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, currX, currY] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

currX--; currY--;

let flag = 1;
let res = [];
res.push(grid[currY][currX]);

while(true){
    flag = 1;
    for(let d = 0; d < 4; d++){
        let ny = currY + dy[d];
        let nx = currX + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        if(grid[currY][currX] < grid[ny][nx]){
            flag = 0;
            currY = ny;
            currX = nx;
            res.push(grid[currY][currX]);
            break;
        }
    }
    if(flag) break;
}

console.log(res.join(' '));
