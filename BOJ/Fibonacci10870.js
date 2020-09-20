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
    
    function fibonacci(n) {
        if(n === 0) return 0;
        else if(n === 1) return 1;

        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    console.log(fibonacci(num));
});