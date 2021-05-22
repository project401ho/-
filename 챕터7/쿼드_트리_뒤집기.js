let input = []
require('readline')
.createInterface(require('fs').createReadStream('쿼드_트리_뒤집기_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(" "));
})
.on('close',()=>{
let repeat = input.shift()
    for(let i = 0; i < repeat; i++) {

        function decompress(s, it, y, x, size){
            console.log("decompressed",decompressed);
            if(it >= s.length){
                return
            }
            head = s[it]
            it++
            if(head == "b" || head == "w"){
                for(let dy = 0; dy < size; ++dy){
                    for(let dx = 0; dx < size; ++dx){
                        decompressed[y+dy][x+dx] = head;
                    }
                }
            }
            else{
                let half = parseInt(size/2);
                decompress(s, it, y, x, half)
                decompress(s, it, y, x+half, half)
                decompress(s, it, y+half, x, half)
                decompress(s, it, y+half, x+half, half)
            }
        }        
        function reverse(s, it) {
            head = s[it]
            it++
            if(head == "b" || head == "w"){
                return head
            }
            let upperleft = reverse(s[it])
            let upperright = reverse(s[it])
            let lowerleft = reverse(s[it])
            let lowerrright = reverse(s[it])
            return "x" + lowerleft + lowerrright + upperleft + upperright
        }

        
        let s = input.shift().toString()
        
        let decompressed = new Array().fill([])
        console.log("b4",decompressed);
        decompress(s,0,0,0,s.length)
        console.log("after",decompressed);


    }
})