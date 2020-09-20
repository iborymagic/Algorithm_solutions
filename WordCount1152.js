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
    if(input[0]) {
        const len = input[0].split(' ').length;
        console.log(len);
    } else {
        console.log(0);
    }
});