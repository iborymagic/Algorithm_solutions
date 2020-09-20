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
    const arr = input[0].split(' ');
    let first = arr[0];
    let second = arr[1];
    
    first = first.split('').reverse().join('');
    second = second.split('').reverse().join('');

    if(first > second) {
        console.log(first);
    } else {
        console.log(second);
    }
});