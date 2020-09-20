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
    const len = input.shift();

    const s = new Stack();

    for(let i = 0; i < len; i++) {
        const line = input[i];
        if(line === 'pop') {
            s.stackPop();
        } else if(line === 'top') {
            s.stackTop();
        } else if(line === 'empty') {
            s.stackEmpty();
        } else if(line === 'size') {
            s.stackSize();
        } else {
            const number = line.split(' ')[1];
            s.stackPush(number);
        }
    }
});

class Stack {
    constructor() {
        this.stack = [];
        this.count = 0;
    }

    stackPush(x) {
        this.stack[this.count] = x;
        this.count++;
    }

    stackPop() {
        if(this.count === 0) {
            console.log('-1');
            return;
        }
        console.log(this.stack[--this.count]);
    }

    stackSize() {
        console.log(this.count);
    }

    stackEmpty() {
        this.count === 0 ? console.log('1') : console.log('0');
    }

    stackTop() {
        if(this.count === 0) {
            console.log('-1');
            return;
        }
        console.log(this.stack[this.count - 1]);
    }
}