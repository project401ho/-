let input = []
require('readline')
.createInterface(require('fs').createReadStream('fanmeeting_input.txt'),{})
.on('line',(line)=>{
    input.push(line.trim().split(""));
})
.on('close',()=>{
let repeat = input.shift()
    
    for(let i = 0; i < repeat; i++) {
        let start = new Date()
        let members = input.shift()
        let male_index = []
        members.forEach((w,i)=> {
            if(w === "M") {
                male_index.push(i)
            }
        })
        let fans = input.shift()
        let res = 0
        while(fans.length >= members.length){
            let temp = fans.slice(fans.length-members.length,fans.length)
            let isAll = true
            for(let i = 0; i < male_index.length; i++){
                if(temp[male_index[i]] === "M"){
                    isAll = false
                    break
                }
            }
            if(isAll){
                res++
            }
            fans.pop()
        }
        console.log(res);
        let end = new Date()
        console.log("time: ",end-start);

    }
})