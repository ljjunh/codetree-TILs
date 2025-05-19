const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

// Please Write your code here.
let res = 0;
const n = A.length;

for (let i = 0; i < n - 1; i++){
    for (let j = i + 1; j < n; j++){
        if (A[i] === '(' && A[j] === ')'){
            res++;
        }
    }
}

console.log(res);