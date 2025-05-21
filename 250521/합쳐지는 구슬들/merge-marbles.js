const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const moveIdx = {
    'U' : 0,
    'D' : 1,
    'L' : 2,
    'R' : 3,
}

const [n, m, t] = input[0].split(' ').map(Number);
const marbles = [];
for (let i = 1; i <= m; i++) {
    let [r, c, d, w] = input[i].split(' ');
    r = Number(r) - 1;
    c = Number(c) - 1;
    d = moveIdx[d];
    w = Number(w);
    marbles.push([r, c, d, w]);
}

// Please Write your code here.

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function move(y, x, d){
    let ny = y + dy[d];
    let nx = x + dx[d];
    if(ny < 0 || ny >= n || nx < 0 || nx >= n) return [y, x, d^1];
    else return [ny, nx, d];
}

let a = Array(n).fill().map(() => Array(n).fill([0, 0, 0]));

for(let i = 0; i < m; i++){
    const [r, c, d, w] = marbles[i];
    a[r][c] = [w, d, i + 1];
}

for(let k = 0; k < t; k++){
    const temp = Array(n).fill().map(() => Array(n).fill([0, 0, 0]));
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(a[i][j][0]){
                const[ni, nj, nd] = move(i, j, a[i][j][1]);
                if(temp[ni][nj][0]){
                    if(temp[ni][nj][2] < a[i][j][2]){
                        temp[ni][nj][1] = a[i][j][1];
                        temp[ni][nj][2] = a[i][j][2];
                    } 
                    temp[ni][nj][0] += a[i][j][0];
                }else{
                    temp[ni][nj] = [a[i][j][0], nd, a[i][j][2]];
                }
            }
        }
    }
    
    // for(let i = 0; i < n; i++){
    //     for(let j = 0; j < n; j++){
    //         a[i][j] = [...temp[i][j]];
    //     }
    // }
    a = temp;
}

let cnt = 0;
let mx = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(a[i][j][0]){
            cnt++;
            mx = Math.max(mx, a[i][j][0]);
        }
    }
}

console.log(cnt, mx);