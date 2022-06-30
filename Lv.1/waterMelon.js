function solution(n) {
    const a = [];
    for(let i  =0 ; i < n; i++){
        i%2 == 0? a.push("수"): i%2 == 1? a.push("박"): null
        
    }
 return a.toString().replace(/[,]/g,"")

}
