const m = new Array(100).fill(0);

function fibonacci(x) {
    if(x == 1) return 1;
    if(x == 2) return 1;
    if(m[x] !== 0) return m[x];
    m[x] = fibonacci(x - 1) + fibonacci(x - 2);
    return m[x];
}

console.log(fibonacci(50));
// DP = 분할정복 + Memoization(배열)