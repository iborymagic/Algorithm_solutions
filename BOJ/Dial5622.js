/*
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
    const map = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
    const codeA = 'A'.charCodeAt(0);
    const str = input[0];
    
    let sum = 0;
    for(let i = 0; i < str.length; i++) {
        const index = str[i].charCodeAt(0) - codeA;
        sum = sum + map[index] + 1;
    }
    console.log(sum);
});*/
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin');
var input = fs.readFileSync('input.txt').toString().trim();

const map = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
const codeA = 'A'.charCodeAt(0);
    
let sum = 0;
for(let i = 0; i < input.length; i++) {
    const index = input.charCodeAt(i) - codeA;
    sum = sum + map[index] + 1;
}
console.log(sum);