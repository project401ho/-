let input = []
require('readline')
.createInterface(require('fs').createReadStream('lis_input.txt'),{})
.on('line',(line)=>{
    input.push(line);
})
.on('close',()=>{
let repeat = input.shift()
    for(let rep = 0; rep < repeat; rep++) {
        let n = Number(input.shift())
        let arr = input.shift().split(" ").map(w=>+w)

        function lis(arr){
            if(arr.length === 0){
                return 0
            }
            let result = 0
            for(let i = 0; i < arr.length; i++){
                let arr2 = []
                for(let j = i+1; j < arr.length; j++){
                    if(arr[i] < arr[j]){
                        arr2.push(arr[j])
                    }
                }
                result = Math.max(result, 1+lis(arr2))
            }
            return result
        }
        console.log("brute force",lis(arr));

        let cache = new Array(n+1).fill(-1)
        // console.log(cache);
        function lis2(start) {
            if(cache[start+1] !== -1) return cache[start+1]            
            cache[start+1] = 1
            for(let next = start+1; next < n; ++next){
                if(start === -1 || arr[start] < arr[next]){
                    cache[start+1] = Math.max(cache[start+1], lis2(next) + 1)
                    // console.log(cache[start+1]);
                }
            }
            return cache[start+1]
        }

        console.log("DP", lis2(-1)-1);
        console.log(" ");
    }
})