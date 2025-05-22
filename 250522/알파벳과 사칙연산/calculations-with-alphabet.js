const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.
const a = [];

for(let i = 0; i < expression.length; i++){
    if(i % 2 === 0) a.push(expression[i]);
}

const alpa = [...new Set(a)].sort();

const temp = [];
let mx = -1e9;

function go(idx){
    if(idx === alpa.length){
        let res = temp[alpa.indexOf(expression[0])];
        for(let i = 2; i < expression.length; i++){
            const idx = alpa.indexOf(expression[i]);
            const x = temp[idx];
            if(expression[i - 1] === '+'){
                res += x;
            }else if(expression[i - 1] === '-'){
                res -= x;
            }else if(expression[i - 1] === '*'){
                res *= x;
            }
        }
        mx = Math.max(mx, res);
        return;
    }
    for(let i = 1; i <= 4; i++){
        temp.push(i);
        go(idx + 1);
        temp.pop();
    }
}

go(0);
console.log(mx);