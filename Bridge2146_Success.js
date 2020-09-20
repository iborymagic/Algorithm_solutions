var input = [];
const readline = require('readline');
const fs = require('fs');

const file = 'inputs/2146.txt';
const r = readline.createInterface({
    input : fs.createReadStream(file),
});

r.on('line', function(line) {
    input.push(line.trim());
});

r.on('close', function() {
    const num = input[0];
    const maps = input.slice(1, input.length);

    const G = new Array(num);
    const V = new Array(num);
    let count = 1;

    for(let i = 0; i < num; i++) {
        G[i] = new Array(num);
        V[i] = new Array(num);
    }

    for(let i = 0; i < num; i++) {
        const slots = maps[i].split(' ');
        for(let j = 0; j < slots.length; j++) {
            G[i][j] = Number.parseInt(slots[j]);
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

    function makeBridge(n) {
        const que = [];
    
        for(let i = 0; i < num; i++) {
            for(let j = 0; j < num; j++) {
                if(G[i][j] === n) {
                    V[i][j] = 0;
                    que.push([i, j]);
                } else {
                    V[i][j] = -1;
                }
            }
        }
    
        while(que.length !== 0) {
            const cur = que.shift();
    
            for(let i = 0; i < 4; i++) {
                const newX = cur[0] + dx[i];
                const newY = cur[1] + dy[i];
    
                if(newX >= 0 && newX < num && newY >= 0 && newY < num && V[newX][newY] === -1) {
                    if(G[newX][newY] !== 0 && G[newX][newY] !== n) {
                        return V[cur[0]][cur[1]];
                    }
    
                    if(G[newX][newY] === 0) {
                        V[newX][newY] = V[cur[0]][cur[1]] + 1;
                        que.push([newX, newY]);
                    }
                }
            }
        }
    }
    
    let min = 1000;
    for(let i = 2; i <= count; i++) {
        const bridge = makeBridge(i);
        if(bridge < min) {
            min = bridge;
        }
    }
    
    console.log(min);
});