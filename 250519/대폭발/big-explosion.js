const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, m, r, c] = input[0].split(' ').map(Number);
// Please Write your code here.

r--; c--;

const dy = [-1, 0, 1, 0];
const dx = [0 , 1, 0, -1];

const q = [];
const a = Array(n).fill().map(() => Array(n).fill(0));
q.push([r, c]);
a[r][c] = 1;

for(let i = 0; i < m; i++){
    const tempQ = [...q];
    tempQ.forEach((pos) => {
        const[y, x] = pos;
        for(let d = 0; d < 4; d++){
            let ny = y + dy[d] * 2**i;
            let nx = x + dx[d] * 2**i;
            if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
            if(a[ny][nx]) continue;
            q.push([ny, nx]);
            a[ny][nx] = 1;
        }
    })
}

let sm = 0;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        sm += a[i][j];
    }
}

console.log(sm);
