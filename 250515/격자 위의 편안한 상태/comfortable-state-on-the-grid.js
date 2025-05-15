const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.
const arr = Array.from({length:n}, ()=>Array(n).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function isRange(x, y){
    return 0 <= x && x < n && 0 <= y && y < n;
}

for (let i = 0; i < m; i++){
    let [x, y] = moves[i];
    x -= 1;
    y -= 1;
    arr[x][y] = 1;
    let cnt = 0;
    for (let j = 0; j < 4; j++){
        const nx = x + dx[j];
        const ny = y + dy[j];
        if (isRange(nx, ny) && arr[nx][ny] === 1){
            cnt++;
        }
    }
    console.log(cnt === 3 ? 1 : 0)
}