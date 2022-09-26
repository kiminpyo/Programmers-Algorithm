function solution(n) {
    let depth= [1,2]
    let answer=[]
    for(let i=0; i<n;i++){   
     depth[i+2] = depth[i]%1234567 +depth[i+1]%1234567      
    }
   console.log(depth)
   
  return depth[n-1]%1234567
 }