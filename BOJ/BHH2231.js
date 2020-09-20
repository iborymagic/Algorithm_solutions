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
    const number = Number(input[0]);
    
    for(let i = 1; i <= number; i++) {
        const numStr = String(i);
        let sum = i;

        for(let j = 0; j < numStr.length; j++) {
            sum += Number(numStr[j]);
        }

        if(sum === number) {
            console.log(i);
            return;
        }
    }
    console.log(0);
});