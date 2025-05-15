const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r) - 1;
c = Number(c) - 1;

// Please Write your code here.

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < n;
}


const dir = {
    'R' : 0,
    'D' : 1,
    'U' : 2,
    'L' : 3 
}

let cur = dir[d]; // 3

for (let i = 0; i < t; i++){
    const nx = r + dx[cur];
    const ny = c + dy[cur];
    if (isRange(nx, ny)){
        r = nx;
        c = ny;
    }else{
        cur = 3 - cur;   
    }
}

console.log(r + 1, c + 1);