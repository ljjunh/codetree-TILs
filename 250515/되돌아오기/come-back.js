const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.
let t = 0;
let res = -1;

let x = 0;
let y = 0;
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

const dir = {
    E : 0,
    W : 1,
    S : 2,
    N : 3
}

for (let i = 0; i < n; i++){
    // 움직여보고 for문 끝날때 초기 위치랑 비교해서 현재 초 넣기
    let [d, v] = moves[i].split(' ');
    v = Number(v);
    for (let j = 0; j < v; j++){
        x = x + (dx[dir[d]]);
        y = y + (dy[dir[d]]);
        t++;
        if (i !== 0 && x === 0 && y === 0){
            res = t;
            break;
        }
    }
}
console.log(res);