let input = []
require('readline')
.createInterface(require('fs').createReadStream('wildcard_input.txt'),{})
.on('line',(line)=>{
    input.push(line);
})
.on('close',()=>{
let repeat = input.shift()
    for(let rep = 0; rep < repeat; rep++) {
        let pat = input.shift()
        let count = input.shift()
        let arr = []
        for(let i = 0; i < count; i++){
            arr.push(input.shift())            
        }
        
        function match(w, s) {
            let pos = 0
            while(pos < s.length && pos < w.length && (w[pos] === "?" || w[pos] === s[pos])){
                pos++
            }
            if(pos === w.length) return pos === s.length
            if(w[pos] === "*"){
                for(let skip = 0; pos + skip <= s.length; skip++){
                    if(match(w.slice(pos+1),s.slice(pos+skip))){
                        return true
                    }
                }
            }
            return false
        }
        arr.forEach(s=>{
            let start = new Date()
            if(match(pat,s)) {
                console.log(s)
                let end = new Date()        
                console.log("완전 탐색: ",end - start);
            };    
            
        })


        let cache;
        let W = pat, S = ""
        function match2(w, s) {
            //메모이제이션
            let result = cache[w][s]
            
            if(result != -1) return result
            while(s < S.length && w < W.length && (W[w] === "?" || W[w] === S[s])){
                w++
                s++                
            }

            if(w === W.length) {
                cache[w][s] = (s === S.length)
                return cache[w][s]
            }
            if(W[w] === "*"){
                for(let skip = 0; skip + s <= S.length; skip++){
                    if(match2(w+1, s+skip)){
                        cache[w][s] = 1
                        return cache[w][s]
                    }
                }
            }
            cache[w][s] = 0
            return cache[w][s]
        }

        arr.forEach(s=>{
            let start = new Date()
            S = s
            cache = new Array(101).fill(new Array(101).fill(-1))            
            if(match2(0, 0)) {
                console.log(s)
                let end = new Date()
                console.log("메모이제이션: ",end - start);
            };
        })

    }
})