let input = []
require('readline')
.createInterface(require('fs').createReadStream('게임판_덮기_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(" "));
})
.on('close',()=>{    
    let repeat = input.shift()
    for(let i = 0; i < repeat; i++) {
        let board = []
        let board_y = input.shift()[0]
        for (let j = 0; j < board_y; j++) {
            let temp = input.shift()[0].split("").map(w=>w==="#" ? 1 : 0)
            // console.log(temp);
            board.push(temp);            
        }
        // console.log(board);
        
        let coverType = [
                            [[0,0],[1,0],[0,1]],
                            [[0,0],[0,1],[1,1]],
                            [[0,0],[1,0],[1,1]],
                            [[0,0],[1,0],[1,-1]]
                        ]
        console.log(Cover(board));
        
        function set(board, y, x, type, delta){
            let ok = true;
            for(let i = 0; i < 3; i++){
                let ny = y + coverType[type][i][0];
                let nx = x + coverType[type][i][1]
                if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length) {
                    ok = false;
                }
                else if((board[ny][nx] += delta) > 1){
                    ok = false
                }
            }
            return ok
        }
        function Cover(board) {
            let y = -1
            let x = -1
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    //빈칸 찾기
                    if (board[i][j] === 0) {
                        y = i
                        x = j
                        break
                    }                       
                }            
                //빈칸 찾으면 브레이크
                if (y != -1) {
                    break
                }
            }
            //기저사례 모든칸이 찼으면 1 반환
            if (y === -1) {
                return 1
            }
            let res = 0

            //타입별 반복문
            for (let type = 0; type < 4; type++) {
                //해당 타입으로 블럭을 놓을 수 있으면
                if(set(board,y,x,type,1)){
                    //블럭 놓고 재귀호출
                    res += Cover(board)
                }
                //다음 타입 대입을 위해 블럭 놓은거 원위치
                set(board,y,x,type,-1)
            }
            
            return res
        }
        
    }
})