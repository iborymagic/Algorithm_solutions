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
    const num = input.shift();
    const answer = [];

    for(let i = 0; i < num; i++) {
        const word = input[i];
        let isGroup = true;

        const noRepeat = word.split('').filter((el, idx, arr) => arr.indexOf(el) === idx);

        noRepeat.forEach(el => {
            const firstIdx = word.indexOf(el);
            const lastIdx = word.lastIndexOf(el);
            if(firstIdx !== lastIdx) {
                for(let j = firstIdx + 1; j < lastIdx; j++) {
                    if(word[j] !== word[j-1]) {
                        isGroup = false;
                        break;
                    }
                }
            } else {
                
            }
        });

        if(isGroup) answer.push(word);
    }

    console.log(answer.length);
});*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const caseCount = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= caseCount; i++) {
    const word = input[i];
    const letter = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
        if (letter.indexOf(word[j]) === -1) {
            letter.push(word[j]);
        } else {
            if (letter.indexOf(word[j]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
        // letter는 이전까지 글자들을 기록해놓은 배열
        // letter에 현재 글자(word[j])가 존재하는데, 그 index가 letter.length - 1이 아니라면
        // 즉, letter에 현재 글자와 같은 글자가 존재하는데, 바로 전에 존재하는 게 아니면
        // 그룹 단어가 아니다.
        // exploit017의 똑똑한 풀이.

        // 문자열 문제지만, 다양하게 쓸 일이 많은 사고인 듯.
    }

    if (isGroupWord) {
        countGroupWord += 1;
    }
}

console.log(countGroupWord);