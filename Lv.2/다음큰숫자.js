function solution(n) {
    const pri = n
    let result = 0
 findNext(n)

function findNext(a){
    let b = a+1;
b.toString(2).replace(/[^1]/g,"") ===   pri.toString(2).replace(/[^1]/g,"")? result = b : findNext(b)

    
        
}

return result
}