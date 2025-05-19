const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let res = 0;

for (let i = 0; i < n; i++){
    for (let j = i + 1; j < n; j++){
        for (let k = j + 1; k < n; k++){
            if (arr[i] <= arr[j] && arr[j] <= arr[k]){
                res ++;
            }
        }
    }
}

console.log(res);