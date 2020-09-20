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
    const firstline = input.shift().split(' ');
    const height = Number(firstline[0]);
    const width = Number(firstline[1]);

    let min = Infinity;
    let count = 0, count_2 = 0;

    for(let i = 0; i < height - 7; i++) {
        for(let j = 0; j < width - 7; j++) {
            count = 0;
            count_2 = 0;

            for(let m = 0; m < 8; m++) {
                for(let n = 0; n < 8; n++) {
                    if((m + n) % 2 === 0) {
                        // 0, 2, 4, 6, 8...
                        if(input[i + m][j + n] === 'B') {
                            // 짝수가 'W'여야 하는 경우
                            count++;
                        } else {
                            // 짝수가 'B'여야 하는 경우
                            count_2++;
                        }
                    } else {
                        // 1, 3, 5, 7, 9...
                        if(input[i + m][j + n] === 'W') {
                            // 홀수가 'B'여야 하는 경우 = 짝수가 'W'여야 하는 경우
                            count++;
                        } else {
                            count_2++;
                        }
                    }
                }
            }
            
            min = min > count ? count : min;
            min = min > count_2 ? count_2 : min;
        }
    }

    console.log(min);
});