function solution(s){
    let c=0
  for(let i=0; i < s.length;i++){
    c += s[i] === "(" ? 1 : -1
     if(c <0) return false
      
  }
return c ===0? true: false
      
    
}