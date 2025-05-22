const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let cnt = 0;

function go(idx){
    if(idx > n) return;

    if(idx === n){
        cnt++;
        return;
    }
    
    go(idx + 1);
    go(idx + 2);
    go(idx + 3);
    go(idx + 4);
}

go(0);
console.log(cnt);