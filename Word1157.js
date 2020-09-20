var input = [];
const readline = require('readline');
const fs = require('fs');
const { S_IFBLK } = require('constants');

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
    const str = input[0].toLowerCase();
    const words = [];
    const map = new Map();

    for(let i = 0; i < str.length; i++) {
        if(words.indexOf(str[i]) === -1) {
            words.push(str[i]);
            map.set(str[i], 1);
        } else {
            map.set(str[i], map.get(str[i]) + 1)
        }
    }

    const arr = Array.from(map);
    let maximum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][1] > maximum) {
            maximum = arr[i][1];
        }
    }

    const filtered = arr.filter(el => el[1] === maximum);
    if(filtered.length >= 2) {
        console.log("?");
    } else {
        console.log(filtered[0][0].toUpperCase());
    }
});