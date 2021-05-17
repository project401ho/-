function pick(n, picked, topick){
    if(topick === 0) {
        console.log(picked)
        return    
    }
    let smallest = picked.length < 1 ? 0 : picked[picked.length-1]+1
    for (let next = smallest; next < n; next++) {
        picked.push(next);
        pick(n, picked, topick -1)
        picked.pop()
    }

}
pick(7,[],4)
