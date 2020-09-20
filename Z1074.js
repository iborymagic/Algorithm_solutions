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
    const line = input[0].split(' ');
    const N = Number(line[0]);
    const r = Number(line[1]);
    const c = Number(line[2]);

    function z(n, r, c) {
        if(n === 1) {
            if(r === 0 && c === 0) {
                return 0;
            } else if(r === 0 && c === 1) {
                return 1;
            } else if(r === 1 && c === 0) {
                return 2;
            } else {
                return 3;
            }
        }

        const half = Math.pow(2, n-1);

        if(r < half && c < half) {
            return z(n-1, r, c);
        } else if(r < half && c >= half) {
            return half*half + z(n-1, r, c - half);
        } else if(r >= half && c < half) {
            return 2 * half*half + z(n-1, r - half, c);
        } else {
            return 3 * half*half + z(n-1, r - half, c - half);
        }
    }

    console.log(z(N, r, c));
});