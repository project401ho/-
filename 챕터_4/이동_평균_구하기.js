function movingAverage(arr, m){
    let queue = []
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if(queue.length > 3){
            queue.shift()
            queue.push(arr[i])            
        }       
        if(queue.length === 3){
            res.push(queue.reduce((a,c)=> a+c) / 3);
        } 
    }
    console.log(res);
}

function revisedMovingAverage(arr, m){
    let n = arr.length;
    let partial_sum = 0;
    let ret = []

    for(let i = 0; i < m - 1; ++i){
        partial_sum += arr[i]
    }
    for (let i = m-1; i < n; ++i) {
        partial_sum += arr[i]
        ret.push(partial_sum/m)
        partial_sum -= arr[i-m+1]  
    }
    return ret
}