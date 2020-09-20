var input = [];
const readline = require('readline');
const fs = require('fs');

const file = 'inputs/2146.txt';
const r = readline.createInterface({
    input : process.stdin
});

r.on('line', function(line) {
    input.push(line.trim());
});

r.on('close', function() {
    const numbers = input[0].split(' ');
    const N = parseInt(numbers[0]);
    const K = parseInt(numbers[1]);
    const G = new Array(100001);

    for(let i = 0; i < G.length; i++) {
        G[i] = 0;
    }

    const queue = [];

    function bfs(n) {
        G[n] = 1;
        queue.push(n);

        while(queue.length !== 0) {
            const cur = queue.shift();
            
            if(cur === K) {
                return G[cur] - 1;
            }

            if(cur + 1 <= 100001 && G[cur + 1] === 0) {
                G[cur + 1] = G[cur] + 1;
                queue.push(cur + 1);
            }

            if(cur - 1 >= 0 && G[cur - 1] === 0) {
                G[cur - 1] = G[cur] + 1;
                queue.push(cur - 1);
            }

            if(cur * 2 <= 100001 && G[cur * 2] === 0) {
                G[cur * 2] = G[cur] + 1;
                queue.push(cur * 2);
            }
        }
    }
    
    console.log(bfs(N));
});