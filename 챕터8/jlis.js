let input = []
require('readline')
.createInterface(require('fs').createReadStream('jlis_input.txt'),{})
.on('line',(line)=>{
    input.push(line);
})
.on('close',()=>{
    console.log("");
    let repeat = Number(input.shift())
    for(let rep = 0; rep < repeat; rep++) {
        let temp = input.shift().split(" ").map(w=>+w)
        let n = temp[0]
        let m = temp[1]
        let A = input.shift().split(" ").map(w=>+w)
        let B = input.shift().split(" ").map(w=>+w)
        let cache = new Array(n+1).fill().map(() => new Array(m+1).fill(-1))
        // console.log(cache);
        // cache[0][0] = 100
        // console.log(cache);

        function jlis(indexA, indexB) {
            if(cache[indexA+1][indexB+1] !== -1) return cache[indexA+1][indexB+1]
            cache[indexA+1][indexB+1] = 2
            let a = indexA === -1 ? -100 : A[indexA]
            let b = indexB === -1 ? -100 : B[indexB]
            let maxElement = Math.max(a,b)
            for(let nextA = indexA + 1; nextA < n; ++nextA){
                if(maxElement < A[nextA]){
                    cache[indexA+1][indexB+1] = Math.max(cache[indexA+1][indexB+1], jlis(nextA, indexB) + 1)  
                }                                  
            }
            for(let nextB = indexB + 1; nextB < m; ++nextB){
                if(maxElement < B[nextB]){
                    cache[indexA+1][indexB+1] = Math.max(cache[indexA+1][indexB+1], jlis(indexA, nextB) + 1)
                }
            }
            return cache[indexA+1][indexB+1]
        }
        console.log(jlis(-1,-1)-2);
        console.log(cache);
    }
})