function solution(s) {
    let a = []
    s.split(' ').forEach((v)=>{
    const big =  v.charAt(0).toUpperCase();
      const small = v.slice(1).toLowerCase();
      a.push(big +small)
     
    })
 
    return a.join(' ').toString()
}