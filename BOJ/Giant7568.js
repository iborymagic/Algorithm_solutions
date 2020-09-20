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
    const num = input.shift();
    let people = [];

    for(let i = 0; i < num; i++) {
        const info = input[i].split(' ');
        const weight = info[0], height = info[1];

        people.push([Number(weight), Number(height), 0]);
    }

    for(let i = 0; i < num - 1; i++) {
        for(let j = i + 1; j < num; j++) {
            if(people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
                people[i][2]++;
            } else if(people[i][0] > people[j][0] && people[i][1] > people[j][1]) {
                people[j][2]++;
            }
        }
    }

    let str = "";
    for(let i = 0; i < num; i++) {
        str += `${people[i][2] + 1} `;
    }
    console.log(str);
});