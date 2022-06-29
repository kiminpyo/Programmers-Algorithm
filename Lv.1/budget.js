function solution(d, budget) {
    const r= d.sort((a,b)=> a-b)
    console.log(r)
   let a =0;
     let index = 0 
     for(let i=0; i<r.length; i++){
         a += r[i]
         if(a > budget){          
          return i
         }else if(a == budget){
             return i+1
         }
        if(sum(r) < budget){
            return r.length
        }
         
       
     }
     
 }
 function sum(r){
     let a= 0
     for (let i=0;i<= r.length-1;i++){
         a += r[i]
     }
     return a
 
 }