// 1. BFS로 풀이(숨바꼭질과 유사)
/*
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
    const N = Number(input[0]);
    
    const g = new Array(1000001).fill(0);

    const queue = [];
    function bfs(x) {
        if(x === 1) return 0;

        g[x] = 0;
        queue.push(x);

        while(queue.length > 0) {
            const cur = queue.shift();

            if(g[1] !== 0) return g[1];

            if(cur % 3 === 0) {
                if(cur / 3 >= 0 && g[cur / 3] === 0) {
                    g[cur / 3] = g[cur] + 1;
                    queue.push(cur / 3);
                }
            }

            if(cur % 2 === 0) {
                if(cur / 2 >= 0 && g[cur / 2] === 0) {
                    g[cur / 2] = g[cur] + 1;
                    queue.push(cur / 2);
                }
            }

            if(cur - 1 >= 0 && g[cur - 1] === 0) {
                g[cur - 1] = g[cur] + 1;
                queue.push(cur - 1);
            }
        }
    }

    console.log(bfs(N));
});
*/

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
    const N = Number(input[0]);
    const d = new Array(1000001).fill(0);

    d[1] = 0;
    for(let i = 2; i <= N; i++) {
        d[i] = d[i - 1] + 1;
        if(i % 2 === 0) d[i] = Math.min(d[i / 2] + 1, d[i]);
        if(i % 3 === 0) d[i] = Math.min(d[i / 3] + 1, d[i]);
    }

    console.log(d[N]);
});