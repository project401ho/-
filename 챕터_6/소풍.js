let input = []
require('readline')
.createInterface(require('fs').createReadStream("소풍_input.txt"),{})
.on('line',(line)=>{
    input.push(line.toString().trim().split(" ").map(w=>+w));    
})
.on('close',()=>{
    console.time('for');
    for(let i = 0; i < input[0]; i++){
        // console.log("");
        let second = input.pop()
        let first = input.pop()
        // console.log(second);
        // console.log(first);
        let answer = 0
        let n = first[0]

        let pairs = []
        for(let i = 0; i < second.length; i+=2){
            pairs.push([second[i],second[i+1]])
        }
        let taken = new Array(Number(n)).fill(0)
        // console.log(taken);
        // console.log(pairs);
        countPair(taken,pairs,n/2)
        function countPair(taken, pairs, count) {            
            if(count === 0){
                // console.log("");
                // console.log("taken",taken);
                // console.log("pairs",pairs);
                if(taken.reduce((a,c)=> a+c)=== n){
                    answer++
                }
                return;
            }
            for (let i = 0; i < pairs.length; i++) {
                let temp = pairs.slice(i+1,pairs.length)
                let store = [taken[pairs[i][0]],taken[pairs[i][1]]]
                taken[pairs[i][0]] = 1
                taken[pairs[i][1]] = 1
                countPair(taken, temp, count-1)     
                taken[pairs[i][0]] = store[0]
                taken[pairs[i][1]] = store[1]    
            }
        }
        console.log(answer);
    }    
    console.timeEnd('for')
})

