let input = []
require('readline')
.createInterface(require('fs').createReadStream('fence_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(" "));
})
.on('close',()=>{
let repeat = input.shift()
    
    for(let i = 0; i < repeat; i++) {
        let n = input.shift()
        let h = input.shift().map(w=>+w)
        console.log(h);
        function solve(left, right) {
            //기저 사례 판자가 하나일 경우
            if(left === right) return h[left]

            //두 문제로 분할
            let mid = parseInt((left+right)/2)
            //각각 의 사각형중 큰 것을 저장
            let res = Math.max(solve(left,mid),solve(mid+1,right))

            //두분에 걸치는 사각형 서치
            let lo = mid, hi = mid +1
            let height =  Math.min(h[lo], h[hi])

            //[mid, mid+1]만 포함하는 너비 2 사각형 고려
            res =  Math.max(res, height*2)
            while(left < lo || hi < right){
                //항상 높이가 더 높은쪽으로 확장
                if(hi < right && (lo == left || h[lo-1] < h[hi+1])){
                    hi++
                    height =  Math.min(height, h[hi])                    
                }
                else{
                    lo--
                    height =  Math.min(height, h[lo])                    
                }
                //확장 후 넓이
                res =  Math.max(res, height*(hi-lo+1))    
            }            
            return res
        }
        console.log(solve(0,n-1))
        
        
    }
})