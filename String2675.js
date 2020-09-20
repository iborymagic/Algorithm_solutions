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
    console.log(input);
    const t = input[0];
    for(let i = 1; i <= t; i++) {
        const arr = input[i].split(' ');
        const rep = arr[0];
        const str = arr[1];

        let sum = "";
        for(let j = 0; j < str.length; j++) {
            for(let k = 0; k < rep; k++) {
                sum += str[j];
            }
        }
        console.log(sum);
    }
});