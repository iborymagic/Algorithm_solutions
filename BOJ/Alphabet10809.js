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
    const alphabet = new Array(26).fill(-1);
    const n = input[0].length;

    for(let i = 0; i < n; i++) {
        const index = input[0].charCodeAt(i) - 97;
        if(alphabet[index] === -1) {
            alphabet[index] = i;
        }
    }

    let str = "";
    for(let i = 0; i < alphabet.length; i++) {
        str += `${alphabet[i]} `;
    }
    console.log(str);
});