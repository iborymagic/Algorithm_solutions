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
    let i = 665;
    let count = 0;
    /*
    while(count < number) {
        i++;
        // 1
        if(String(i).includes('666')) {
            count++;
        }
        // 2
        for(let m = 0; m < 10; m++) {
            if((i / Math.pow(10, m) >> 0) % 1000 === 666) {
                count++;
                break;
            }
        }
    }*/

    while(count < number) {
        i++;
        let temp = i;
        while(temp) {
            if(temp % 1000 === 666) {
                count++;
                break;
            }
            temp = (temp / 10) >> 0;
        }
    }
    console.log(i);
});
