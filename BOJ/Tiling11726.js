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
    const n = BigInt(input[0]);

    const m = new Array(1001).fill(0);

    function tile(x) {
        if(x == 1) return BigInt(1);
        if(x == 2) return BigInt(2);
        if(m[x] != 0) return m[x];
        
        m[x] = (tile(x-BigInt(1)) + tile(x-BigInt(2))) % BigInt(10007);
        return m[x];
    }

    console.log(tile(n).toString());
});