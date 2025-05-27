const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_N = 4000;
const OFFSET = 2000;

let idx = 0;
let T = Number(input[idx++]);

let marbles = [];
let nextMarbles = [];
let nextMarbleIdx = Array(MAX_N + 1).fill().map(() => Array(MAX_N + 1).fill(-1));
let currTime = 0;
let lastTime = -1;

const mapper = {
    'U': 0,
    'D': 1,
    'L': 2,
    'R': 3,
}

const dy = [1, -1, 0, 0];
const dx = [0, 0, -1, 1];

function move(marble){
    const [y, x, w, d, n] = marble;

    const ny = y + dy[d];
    const nx = x + dx[d];

    return [ny, nx, w, d, n];
}

function collide(marble1, marble2){
    const [y1, x1, w1, d1, n1] = marble1;
    const [y2, x2, w2, d2, n2] = marble2;

    if(w1 > w2 || (w1 === w2 && n1 > n2)) return marble1;
    else return marble2;
}

function pushNextMarble(marble){
    const [y, x] = marble;
    if(y < 0 || y > MAX_N || x < 0 || x > MAX_N) return;

    const idx = nextMarbleIdx[y][x];

    if(idx === -1){
        nextMarbles.push(marble);
        nextMarbleIdx[y][x] = nextMarbles.length - 1;
    }else{
        nextMarbles[idx] = collide(nextMarbles[idx], marble);
        lastTime = currTime;
    }
}

for (let t = 0; t < T; t++) {
    let N = Number(input[idx++]);
    
    marbles = [];
    lastTime = -1;

    for (let i = 0; i < N; i++) {
        let [x, y, w, d] = input[idx++].split(' ');
        x = Number(x) * 2 + OFFSET;
        y = Number(y) * 2 + OFFSET;
        w = Number(w);
        d = mapper[d];
        marbles.push([y, x, w, d, i + 1]);
    }

    for(let i = 1; i <= MAX_N; i++){
        currTime = i;
        marbles.forEach(marble => {
            const nextMarble = move(marble);
            pushNextMarble(nextMarble);
        })

        marbles = [...nextMarbles];

        nextMarbles.forEach(marble => {
            const [y, x] = marble;
            nextMarbleIdx[y][x] = -1;
        })

        nextMarbles = [];
    }

    console.log(lastTime);
}
