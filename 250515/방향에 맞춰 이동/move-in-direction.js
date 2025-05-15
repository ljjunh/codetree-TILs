const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
const direction = {
    E : 0,
    S : 1,
    W : 2,
    N : 3
};

let x = 0;
let y = 0;


for (let i = 0; i < n; i++){
    let [d, v] = moves[i].split(' ');
    v = Number(v);
    x += dx[direction[d]] * v;
    y += dy[direction[d]] * v;
}

console.log(x, y);