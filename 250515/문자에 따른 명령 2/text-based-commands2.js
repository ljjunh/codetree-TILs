const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
let x = 0;
let y = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0;


for (let i = 0; i < commands.length; i++){
    if (commands[i] === 'L'){
        dir = (dir - 1 + 4) % 4
    }else if (commands[i] === 'R'){
        dir = (dir + 1) % 4
    }else if (commands[i] === 'F'){
        x += dx[dir];
        y += dy[dir];
    }
}

console.log(x, y);