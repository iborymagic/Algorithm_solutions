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
    const num = input[0];
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += Number(input[1][i]);
    }
    console.log(sum);
});