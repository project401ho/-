let input = []
require('readline')
.createInterface(require('fs').createReadStream('jumpgame_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(" "));
})
.on('close',()=>{
let repeat = input.shift()
    for(let i = 0; i < repeat; i++) {
        let size = Number(input.shift().join(""))
        let board = []
        for(let j = 0; j < size; j++){
            let temp = input.shift().map(w=>+w)
            board.push(temp)
        }
        
        //완전 탐색
        function jump(y, x) {
            //기저 사례 x,y가 끝지점이라면 참       
            if(x === board.length-1 && y === board[0].length-1){
                return true
            }
            //기저 사례 x나 y가 보드를 넘어가면 거짓
            if(x >= board.length || y >= board[0].length){
                return false
            }
                    //밑으로 뛰기           //오른쪽으로 뛰기
            let jumpsize = board[y][x]
            return jump(y+jumpsize,x) ||  jump(y,x+jumpsize)             
        }
        
        console.log(jump(0,0));

        let cache = new Array(board.length).fill(new Array(board[0].length).fill(-1))
        function jump2(y, x) {
            //기저 사례
            if(x === board.length-1 && y === board[0].length -1) return 1
            if(x >= board.length || y >= board[0].length) return 0

            ///메모이제이션
            let result = cache[y][x]
            if(result !== -1) return result
            let jumpsize = board[y][x]
            cache[y][x] = (jump2(y + jumpsize, x) || jump2(y, x + jumpsize))
            return cache[y][x]

        }

        console.log(jump2(0,0));
        console.log(cache);
    }
})