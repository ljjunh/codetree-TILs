const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

// Please write your code here.

const temp = [];
const res = [];

function go(idx, cnt){
    if(cnt === n){
        res.push(temp.join(' '));
        return;
    }
    for(let i = 1; i <= k; i++){
        temp.push(i);
        go(i, cnt + 1);
        temp.pop();
    }
}

go(0, 0);
console.log(res.join('\n'));