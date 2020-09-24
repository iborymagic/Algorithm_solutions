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
    const n = Number(input[0]);
    const f = new Array(1000001).fill(0);
    const g = new Array(1000001).fill(0);

    f[0] = BigInt(1); f[1] = BigInt(2);
    g[0] = BigInt(0); g[1] = BigInt(1);
    
    for(let i = 2; i <= n; i++) {
        g[i] = ((f[i - 1] + f[i - 2]) % BigInt(1000000007) + g[i - 2]) % BigInt(1000000007);
        f[i] = (f[i - 2] + (BigInt(2) * g[i]) % BigInt(1000000007)) % BigInt(1000000007);
    }

    console.log(f[n].toString());
});