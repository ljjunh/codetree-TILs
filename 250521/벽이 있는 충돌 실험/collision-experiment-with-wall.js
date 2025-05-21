const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
const t = Number(input[idx++]);

const moveIdx = {
    'U' : 0,
    'D' : 1,
    'L' : 2,
    'R' : 3,
}

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

for (let k = 0; k < t; k++) {
    const [n, m] = input[idx++].split(' ').map(Number);
    let marbles = [];
    for (let i = 0; i < m; i++) {
        let [y, x, d] = input[idx++].split(' ');
        marbles.push([Number(y) - 1, Number(x) - 1, moveIdx[d]]);
    }

    let a = Array(n).fill().map(() => Array(n).fill(0));
    let dir = Array(n).fill().map(() => Array(n).fill(0));

    function move(y, x, d){
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n){
            return [y, x, d^1];
        }else{
            return [ny, nx, d];
        }
    }

    function clear(arr){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                arr[i][j] = 0;
            }
        }
        return arr;
    }

    for(let i = 0; i < n * 2; i++){
        a = clear(a);
        dir = clear(dir);

        // console.log(a);
        // console.log(dir);

        for(let j = 0; j < marbles.length; j++){
            const [y, x, d] = marbles[j];
            const [ny, nx, nd] = move(y, x, d);
            a[ny][nx]++;
            dir[ny][nx] = nd;
        }

        // console.log(a);
        // console.log(dir);

        const temp = [];

        for(let r = 0; r < n; r++){
            for(let c = 0; c < n; c++){
                if(a[r][c] === 1) temp.push([r, c, dir[r][c]]);
            }
        }
        marbles = temp;
    }

    console.log(marbles.length);

}
