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
    const r = Number(firstLine[0]);
    const c = Number(firstLine[1]);

    let J = [];
    let F = [];

    const maze = new Array(r);
    const fire = new Array(r);
    const jihoon = new Array(r);

    for(let i = 0; i < r; i++) {
        maze[i] = new Array(c);
        jihoon[i] = new Array(c).fill(0);
        fire[i] = new Array(c).fill(0);
        for(let j = 0; j < c; j++) {
            maze[i][j] = input[i][j];

            if(maze[i][j] === 'F') {
                F.push([i, j]);
            } else if(maze[i][j] === 'J') {
                J = [i, j];
            }
        }
    }

    const queue = [];
    const dirX = [1, -1, 0, 0];
    const dirY = [0, 0, -1, 1];

    function bfsForJ() {
        const Jstart = J;
        jihoon[Jstart[0]][Jstart[1]] = 1;
        queue.push([Jstart[0], Jstart[1]]);

        while(queue.length > 0) {
            const cur = queue.shift();

            for(let i = 0; i < 4; i++) {
                const nextX = cur[0] + dirX[i];
                const nextY = cur[1] + dirY[i];

                if(nextX < 0 || nextY < 0 || nextX >= r || nextY >= c) {
                    console.log(jihoon[cur[0]][cur[1]]);
                    return;
                }

                if(nextX >= 0 && nextY >= 0 && nextX < r && nextY < c) {
                    if(jihoon[nextX][nextY] === 0 && maze[nextX][nextY] !== '#') {
                        if(!fire[nextX][nextY] || fire[nextX][nextY] > jihoon[cur[0]][cur[1]] + 1) {
                            jihoon[nextX][nextY] = jihoon[cur[0]][cur[1]] + 1;
                            queue.push([nextX, nextY]);
                        }
                    }
                }
            }
        }
        console.log("IMPOSSIBLE");
    }

    const queue_2 = [];

    function bfsForFire() {
        while(F.length > 0) {
            const Fstart = F.pop();
            fire[Fstart[0]][Fstart[1]] = 1;
            queue_2.push(Fstart);
        }

        while(queue_2.length > 0) {
            const cur = queue_2.shift();

            for(let i = 0; i < 4; i++) {
                const nextX = cur[0] + dirX[i];
                const nextY = cur[1] + dirY[i];

                if(nextX >= 0 && nextY >= 0 && nextX < r && nextY < c) {
                    if(fire[nextX][nextY] === 0 && maze[nextX][nextY] !== '#') {
                        fire[nextX][nextY] = fire[cur[0]][cur[1]] + 1;
                        queue_2.push([nextX, nextY]);
                    }
                }
            }
        }
    }

    if(F) {
        bfsForFire(F[0], F[1]);
    }
    bfsForJ(J[0], J[1]);

    // J는 사람이라서 하나밖에 없는 게 맞지만, F가 반드시 하나일 이유는 없다.
});