const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const arr = Array.from({ length: n }, () => Array(n).fill(0));
let x = Math.floor(n / 2);
let y = Math.floor(n / 2);
let dir = 0;
let moveNum = 1;
const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < n;
}


function end(){
    return !isRange(x, y);
}

let cnt = 1;

while(!end()){
    for (let i = 0; i < moveNum; i++){
        arr[x][y] = cnt;
        cnt++;
        x += dx[dir];
        y += dy[dir];
    }

    dir = (dir + 1) % 4;
    if (dir === 0 || dir === 2){
        moveNum ++;
    }
}

arr.forEach((row) => {
    console.log(row.join(' '));
})