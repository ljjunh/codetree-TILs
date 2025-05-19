const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);
const positions = input.slice(1, 1 + m).map(line => line.split(' ').map(Number));
const movements = input.slice(1 + m, 1 + m + k).map(line => line.split(' '));
// Please Write your code here.

class Queue {
    constructor(){
        this.q = [];
        this.head = 0;
        this.tail = 0;
    }
    push(item){
        this.q.push(item);
        this.tail++;
    }
    size(){
        return this.tail - this.head;
    }
    empty(){
        return this.head === this.tail;
    }
    pop(){
        if(this.empty()) throw new Error('que is empty');
        return this.q[this.head++];
    }
    has(y1, x1){
        for(let i = this.head + 1; i < this.tail; i++){
            const[y2, x2] = this.q[i];
            if(y1 === y2 && x1 === x2) return true;
        }
        return false;
    }
}

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

const move = {
    'U' : 0,
    'R' : 1,
    'D' : 2,
    'L' : 3,
}

const a = Array(n).fill().map(() => Array(n).fill(0));

for(let i = 0; i < m; i++){
    let [y, x] = positions[i];
    y--; x--;
    a[y][x] = 1;
}


const q = new Queue();
let y = 0, x = 0;
let t = 0;
q.push([y, x]);


for(let i = 0; i < k; i++){
    let[m, v] = movements[i];
    const d = move[m];
    v = Number(v);

    for(let j = 0; j < v; j++){
        t++;
        let ny = y + dy[d];
        let nx = x + dx[d];
        if(ny < 0 || ny >= n || nx < 0 || nx >= n || q.has(ny, nx)){
            console.log(t);
            process.exit(0);
        }
        if(a[ny][nx]){
            q.push([ny, nx]);
            a[ny][nx] = 0;
        }else{
            q.pop();
            q.push([ny, nx]);
        }
        y = ny;
        x = nx;

    }
}

console.log(t);