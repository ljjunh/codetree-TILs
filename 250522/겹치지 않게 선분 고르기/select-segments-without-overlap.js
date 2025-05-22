const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const temp = [];
let mx = -1e9;

function go(idx){
    if(idx === n){
        const cnt = Array(1004).fill(0);
        for([x1, x2] of temp){
            for(let i = x1; i <= x2; i++){
                if(cnt[i]) return;
                cnt[i]++;
            }
        }
        mx = Math.max(mx, temp.length);
        return;
    }

    temp.push(segments[idx]);
    go(idx + 1);
    temp.pop();

    go(idx + 1);
}

go(0);

console.log(mx);