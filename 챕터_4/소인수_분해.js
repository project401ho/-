function factor(n){
    if(n === 1) return [1]
    let ret = []
    for(let div = 2; n > 1; ++div){
        while(n%div === 0){
            n/= div
            ret.push(div)
        }
    }
    return ret
}