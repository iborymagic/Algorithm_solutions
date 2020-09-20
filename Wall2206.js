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
    const sizes = input[0].split(' ');
    const rows = parseInt(sizes[0]);
    const columns = parseInt(sizes[1]);

    const lines = input.slice(1, input.length);
    const G = new Array(rows);
    const R = new Array(rows);

    for(let i = 0; i < rows; i++) {
        G[i] = new Array(columns);
        R[i] = new Array(columns);
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            G[i][j] = parseInt(lines[i][j]);
            R[i][j] = [0, false];
        }
    }

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [];
    
    function bfs(x, y) {
        R[x][y][0] = 1;
        queue.push([x, y]);

        while(queue.length !== 0) {
            const cur = queue.shift();

            if(cur[0] === rows - 1 && cur[1] === columns - 1) {
                return R[cur[0]][cur[1]][0];
            }

            for(let i = 0; i < dx.length; i++) {
                const newX = cur[0] + dx[i];
                const newY = cur[1] + dy[i];

                if(newX >= 0 && newY >= 0 && newX < rows && newY < columns && G[newX][newY] === 1 && R[newX][newY][0] === 0 && R[cur[0]][cur[1]][1] === false) {
                    //R[cur[0]][cur[1]][1] = true;
                    R[newX][newY][1] = true;
                    R[newX][newY][0] = R[cur[0]][cur[1]][0] + 1;
                    queue.push([newX, newY]);
                }
                
                if(newX >= 0 && newY >= 0 && newX < rows && newY < columns && G[newX][newY] !== 1 && R[newX][newY][0] === 0) {
                    R[newX][newY][0] = R[cur[0]][cur[1]][0] + 1;
                    R[newX][newY][1] = R[cur[0]][cur[1]][1];
                    queue.push([newX, newY]);
                }
            }
        }

       return -1;
    }

    const solution = bfs(0, 0);
    console.log(solution);
});