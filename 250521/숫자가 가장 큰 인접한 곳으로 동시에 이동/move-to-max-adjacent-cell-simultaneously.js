const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
let marbles = input.slice(1 + n, 1 + n + m).map(line => line.split(' ').map(v => Number(v) - 1));

// Please Write your code here.

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

function find(y, x) {
    let mx = 0;
    let ry = 0;
    let rx = 0;

    for(let d = 0; d < 4; d++){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
        if(mx < grid[ny][nx]){
            mx = grid[ny][nx];
            ry = ny;
            rx = nx;
        }
    }
    return [ry, rx];
}

function clear(){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            cnt[i][j] = 0;
        }
    }
}

const cnt = Array(n).fill().map(() => Array(n).fill(0));

for(let i = 0; i < t; i++){
    clear();
    for(let j = 0; j < marbles.length; j++){
        let [y, x] = marbles[j];
        let [ny, nx] = find(y, x);
        cnt[ny][nx]++;
    }

    const temp = [];

    for(let r = 0; r < n; r++){
        for(let c = 0; c < n; c++){
            if(cnt[r][c] >= 2) cnt[r][c] = 0;
            else if(cnt[r][c]) temp.push([r, c]);
        }
    }

    marbles = temp;
}

console.log(marbles.length);