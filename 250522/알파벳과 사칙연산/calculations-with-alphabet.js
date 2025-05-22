const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.

const n = (expression.length + 1) / 2;

const temp = [];
let mx = -1e9;

function go(idx){
    if(idx === n){
        let res = temp[0];
        for(let i = 2; i < expression.length; i+=2){
            if(expression[i - 1] === '+'){
                res += temp[i/2];
            }else if(expression[i - 1] === '-'){
                res -= temp[i/2];
            }else if(expression[i - 1] === '*'){
                res *= temp[i/2];
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