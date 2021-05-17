let input = []
let board = []
let words = []
require('readline')
.createInterface(process.stdin,{})
.on('line',(line)=>{
    input.push(line.trim());
})
.on('close',()=>{
    for(let i = 1; i < 6; i++){
        board.push(input[i])
    }
    for(let i = 7; i < input.length; i++){
        words.push(input[i])
    }
    let dx = [-1,-1,-1,1,1,1,0,0]
    let dy = [-1,0,1,-1,0,1,-1,1]

    board = board.map(w=>w.split(""))
    function hasWord(y,x,word){
        //범위 체크
        if(x > 4 || y > 4 || x < 0 || y < 0) {
            return false
        };
        //첫글자 불일치 체크
        if(board[y][x] !== word[0]) {
            return false
        };    
        //단어 길이 1 체크
        if(word.length === 1) {
            return true
        };
        for(let dir = 0; dir < 8; dir++){
            let nexty = y + dy[dir], nextx = x + dx[dir];
            
            if(hasWord(nexty,nextx,word.slice(1))){            
                return true
            }
        }
        return false
    }
    words.forEach(w=>{
        let boolean = ""
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){        
                boolean= hasWord(i,j,w) ? "YES" : "\NO"
                if(boolean === "YES"){
                    break
                }        
            }
            if(boolean === "YES"){
                break
            }
        }
        console.log(`${w} ${boolean}`);   
        
    })

})


