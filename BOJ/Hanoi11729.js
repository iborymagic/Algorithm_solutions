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
    const num = Number(input[0]);
    let count = 0;
    let result = "";

    function hanoi(n, a, b) {
        count++;
        if(n === 1) {
            result += `${a} ${b}\n`;
            return;
        }

        hanoi(n-1, a, 6-a-b);
        result += `${a} ${b}\n`;
        hanoi(n-1, 6-a-b, b);
    }

    hanoi(num, 1, 3);

    console.log(count);
    console.log(result);
});