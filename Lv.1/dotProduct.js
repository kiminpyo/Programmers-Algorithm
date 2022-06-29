function solution(a, b) { 
    let q =0;
    a.map((v,i)=> {
        
        const result = v*b[i]
        q += result
    })
    return q

}