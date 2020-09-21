var input = [];
const readline = require('readline');
const fs = require('fs');

const file = 'input.txt';
const r = readline.createInterface({
    input : fs.createReadStream(file)
    // 나중에 제출할 때 바꿔야 함
    // input: process.stdin
});

r.on('line', function(line) {
    input.push(line.trim());
});

r.on('close', function() {
    const firstLine = input.shift().split(' ');
    const n = Number(firstLine[0]);
    const m = Number(firstLine[1]);

    const maze = new Array(n);
    const visit = new Array(n);

    for(let i = 0; i < n; i++) {
        maze[i] = new Array(m);
        visit[i] = new Array(m).fill(0);
        for(let j = 0; j < m; j++) {
            maze[i][j] = Number(input[i][j]);
        }
    }

    const queue = [];
    const dirX = [1, -1, 0, 0];
    const dirY = [0, 0, 1, -1];

    function bfs(x, y) {
        visit[x][y] = 1;
        queue.push([x, y]);

        while(queue.length > 0) {
            const cur = queue.shift();
            for(let i = 0; i < 4; i++) {
                const nextX = cur[0] + dirX[i];
                const nextY = cur[1] + dirY[i];

                if(nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
                    if(visit[nextX][nextY] === 0 && maze[nextX][nextY] === 1) {
                        visit[nextX][nextY] = visit[cur[0]][cur[1]] + 1;
                        queue.push([nextX, nextY]);
                    }
                }
            }
        }
    }

    bfs(0, 0);
    console.log(visit[n-1][m-1]);
});