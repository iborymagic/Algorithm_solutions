const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const lines = input.split('\r\n');
const num = lines[0];

const G = new Array(num);
const V = new Array(num);
let count = 1;

for(let i = 0; i < num; i++) {
    G[i] = new Array(num);
    V[i] = new Array(num);
}

const maps = lines.slice(1, lines.length);

for(let i = 0; i < num; i++) {
    const slots = maps[i].split(' ');
    for(let j = 0; j < slots.length; j++) {
        G[i][j] = Number.parseInt(slots[j]);
        V[i][j] = 0;
    }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const queue = [];

function bfs(x, y) {
    G[x][y] = count;
    queue.push([x, y]);

    while(queue.length !== 0) {
        const cur = queue.shift();

        for(let i = 0; i < 4; i++) {
            const nextX = cur[0] + dx[i];
            const nextY = cur[1] + dy[i];

            if(nextX >= 0 && nextY >= 0 && nextX < num && nextY < num && G[nextX][nextY] === 1) {
                G[nextX][nextY] = count;
                queue.push([nextX, nextY]);
            }
        }
    }
}

for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
        if(G[i][j] === 1) {
            count++;
            bfs(i, j);
        }
    }
}

/*
[
    [2, 2, 2, 0, 0, 0, 0, 3, 3, 3],
    [2, 2, 2, 2, 0, 0, 0, 0, 3, 3],
    [2, 0, 2, 2, 0, 0, 0, 0, 3, 3],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 3],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
*/