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
    const n = Number(input[0]);
    const m = new Array(31).fill(0);

    function tile(x) {
        if(x === 0) return 0;
        if(x === 2) return 3;
        if(x % 2 === 1) return 0;
        if(m[x] !== 0) return m[x];

        let result = 3 * tile(x - 2);
        for(let i = 2; i <= x/2<<0; i++) {
            result += 2 * tile(x - 2*i);
        } 
        m[x] = result;
        return m[x];
        
       /*
       if(x === 0) return 0;
       if(x === 1) return 0;
       if(x === 2) return 3;
       if(m[x] !== 0) return m[x];
       let result = 3* tile(x - 2);
       for(let i = 3; i <= x; i++) {
           if(i % 2 === 0) {
               result += 2 * tile(x - i);
           }
       }
       m[x] = result;
       return m[x];*/
    }

    console.log(tile(n));
});