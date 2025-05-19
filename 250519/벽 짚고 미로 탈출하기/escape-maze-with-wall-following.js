const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
let [y, x] = input[1].split(' ').map(Number);
const grid = input.slice(2, 2 + n);
// Please Write your code here.


// 시계 방향 순
const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

y--; x--;

let d = 0;
let cnt = 0;
let rCnt = 0;

// const rightWall = grid[y + dy[(d + 1) % 4]][x + dx[(d + 1) % 4]]
// console.log(rightWall)

while(true){

    if(cnt > n * n || rCnt > n * n) break;

    const rightWall = grid[y + dy[(d + 1) % 4]][x + dx[(d + 1) % 4]]

    if(rightWall === '#'){
        const ny = y + dy[d];
        const nx = x + dx[d];

        if(ny < 0 || ny >= n || nx < 0 || nx >= n){
            cnt++;
            break;
        }

        const forwardWall = grid[ny][nx];

        if(forwardWall === '#'){
            d = (d + 4 - 1) % 4;
            rCnt++;
        } 
        else if(forwardWall === '.'){
            cnt++;
            y = y + dy[d];
            x = x + dx[d];
        }
    }
    else if(rightWall === '.'){
        d = (d + 1) % 4;
        cnt++;
        y = y + dy[d];
        x = x + dx[d];
    }
}
if(rCnt > n * n) console.log(-1)
else console.log(cnt > n * n ? -1 : cnt);