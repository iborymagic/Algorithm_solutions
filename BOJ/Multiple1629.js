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

// BigInt를 사용해야 함.
r.on('close', function() {
    let [a, b, c] = input[0].split(' ');
    a = BigInt(a);
    b = BigInt(b);
    c = BigInt(c);

    function pow(a, b, c) {
        if(b == 1) {
            return a % c;
        }
        
        let value = BigInt(pow(a, b/BigInt(2), c));
        value = value * value % c;

        if(b % BigInt(2) == 0) {
            return value;
        }   
        return value * a % c;
    }

    console.log(pow(a, b, c).toString());
});