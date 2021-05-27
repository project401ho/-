let input = []
require('readline')
.createInterface(require('fs').createReadStream('trianglepath_input.txt'),{})
.on('line',(line)=>{
    input.push(line);
})
.on('close',()=>{
let repeat = input.shift()
    for(let rep = 0; rep < repeat; rep++) {
        let triangle = []
        let count = input.shift()
        for(let i = 0; i < count; i++){
            triangle.push(input.shift().split(" ").map(w=>+w))
        }
        console.log(triangle);

        function pathSum(y, x, sum){
            if(y >= triangle.length){
                return sum
            }
            let num = triangle[y][x]
            return Math.max(pathSum(y+1,x,sum+num), pathSum(y+1,x+1,sum+num))
        }
        console.log(pathSum(0,0,0))

        let cache = [...triangle].map(item=>item.map(w=>-1))
        function pathSum2(y,x){
            if(y === triangle.length-1) return triangle[y][x]
            let result = cache[y][x]
            if(result != -1) return result
            cache[y][x] = Math.max(pathSum2(y+1,x),pathSum2(y+1,x+1)) + triangle[y][x]
            return cache[y][x]
        }

        console.log(pathSum2(0,0));
    }
})