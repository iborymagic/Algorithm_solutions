/*
var input = [];
const readline = require('readline');
const fs = require('fs');
const { count } = require('console');

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
    const line = input[0].split(' ');
    const N = Number(line[0]);
    const K = Number(line[1]);
    const len = 100001;

    const location = new Array(len).fill(0);
    location[K] = 1;
    const visit = new Array(len).fill(0);

    const queue = [];

    function seek(x) {
        queue.push(x);
        visit[x] = 1;

        while(queue.length > 0) {
            const cur = queue.shift();

            if(location[cur] === 1) {
                return visit[cur] - 1;
            }

            if(cur + 1 < len && visit[cur + 1] === 0) {
                queue.push(cur + 1);
                visit[cur + 1] = visit[cur] + 1;
            }

            if(cur - 1 >= 0 && visit[cur - 1] === 0) {
                queue.push(cur - 1);
                visit[cur - 1] = visit[cur] + 1;
            }

            if(2 * cur < len && visit[2 * cur] === 0) {
                queue.push(2 * cur);
                visit[2 * cur] = visit[cur] + 1;
            }
        }
    }

    console.log(seek(N));
});*/
// 문제의 조건에서, 수빈이와 동생이 0에서 10만 사이에 위치한다곤 하지만,
// 이동 중에 10만을 벗어나선 안된다는 말은 없다.
// 물론 이 문제에서는 10만을 벗어나면 무조건 손해기 때문에 그런 경우가 없었지만
// 함부로 문제를 제한된 시각으로 보면 안된다는 것.

var input = [];
const readline = require('readline');
const fs = require('fs');
const { count } = require('console');

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
    const line = input[0].split(' ');
    const N = Number(line[0]);
    const K = Number(line[1]);
    const len = 100001;

    const visit = new Array(len).fill(0);

    const queue = [];

    function seek(x) {
        queue.push(x);
        visit[x] = 1;

        while(queue.length > 0) {
            const cur = queue.shift();

            if(visit[K] !== 0) {
                return visit[K] - 1;
            }

            if(cur + 1 < len && visit[cur + 1] === 0) {
                queue.push(cur + 1);
                visit[cur + 1] = visit[cur] + 1;
            }

            if(cur - 1 >= 0 && visit[cur - 1] === 0) {
                queue.push(cur - 1);
                visit[cur - 1] = visit[cur] + 1;
            }

            if(2 * cur < len && visit[2 * cur] === 0) {
                queue.push(2 * cur);
                visit[2 * cur] = visit[cur] + 1;
            }
        }
    }

    console.log(seek(N));
});
