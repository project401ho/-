function bino(n, r) {
    if(r === 0 || n === r) return 1;
    return bino(n-1, r-1) + bino(n-1, r)
}

let cache = [];
function bino_memoization(n, r) {
    if(r == 0 || n == r) return 1
    if(cache[n][r] != -1){
        return cache[n][r]
    }
    return cache[n][r] = bino_memoization(n-1,r-1) + bino_memoization(n-1,r)
}