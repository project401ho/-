let input = []
require('readline')
.createInterface(require('fs').createReadStream('시계_맞추기_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(" "));
})
.on('close',()=>{
    let INF = 9999, SWITCHES = 10, CLOCKS = 16;
    let linked = []
    linked.push("xxx.............")
    linked.push("...x...x.x.x....")
    linked.push("....x.....x...xx")
    linked.push("x...xxxx........")
    linked.push("......xxx.x.x...")
    linked.push("x.x...........xx")
    linked.push("...x..........xx")
    linked.push("....xx.x......xx")
    linked.push(".xxxxx..........")
    linked.push("...xxx...x...x..")

    console.log(linked);
    function areAligned(clocks) {
        for (let i = 0; i < clocks.length; i++) {
            if(clocks[i] != 12) return false            
        }
        return true
    }

    function push(clocks, swtch) {
        for (let clock = 0; clock < CLOCKS; clock++) {
            if(linked[swtch][clock] === "x"){
                clocks[clock] += 3
                if(clocks[clock] == 15) clocks[clock] = 3
            }            
        }
    }
    function solve(clocks, swtch) {
        if(swtch === SWITCHES) return areAligned(clocks) ? 0 : INF
        let res = INF;
        for (let cnt = 0; cnt < 4; cnt++) {
            res = Math.min(res, cnt + solve(clocks, swtch + 1))
            push(clocks, swtch)            
        }
        return res
    }
    let repeat = input.shift()
    for(let i = 0; i < repeat; i++) {
        let clocks = input.shift().map(w=>+w)
        console.log(solve(clocks,0));
    }
})