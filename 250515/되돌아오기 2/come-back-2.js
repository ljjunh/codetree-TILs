const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.
// 북 동 남 서
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let x = 0;
let y = 0;
let dir = 0;
let t = 0;
let res = -1;
let flag = false;

for (let i = 0; i < commands.length; i++){
    t++;
    if (commands[i] === 'L'){
        dir = (dir - 1 + 4) % 4;
    }
    if (commands[i] === 'R'){
        dir = (dir + 1) % 4;
    }
    if (commands[i] === 'F'){
        x += dx[dir];
        y += dy[dir];
        if (x === 0 && y === 0){
            res = t;
            flag = true;
        }
    }
    if (flag){
        break;
    }
}
console.log(res);