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
    let firstline = input[0];
    firstline = firstline.split(' ');

    const len = firstline[0];
    const target = firstline[1];

    let numbers = input[1];

    numbers = numbers.split(' ');
    for(let i = 0; i < len; i++) {
        numbers[i] = Number(numbers[i]);
    }

    let max = 0;

    for(let i = 0; i < len - 2; i++) {
        for(let j = i + 1; j < len - 1; j++) {
            for(let k = j + 1; k < len; k++) {
                const sum = numbers[i] + numbers[j] + numbers[k];
                if(sum > max && sum <= target) {
                    max = sum;
                }
            }
        }
    }

    console.log(max);
});