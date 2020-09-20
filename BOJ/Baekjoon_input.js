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
    // input 배열에 입력이 한 줄씩 저장되어있음.
});


//---------------------------------------------------------------------
var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim();
var input = fs.readFileSync('input.txt').toString().trim();