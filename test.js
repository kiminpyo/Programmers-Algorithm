function solution(n, lost, reserve) {
    
  
  let reserveDupl = reserve.filter(item => !lost.includes(item))
  let lostDupl = lost.filter(item=> !reserve.includes(item))
   let answer = n - lostDupl.length ;
       lostDupl.sort((a,b)=>a-b);
       reserveDupl.sort((a,b)=>a-b);
   lostDupl.forEach(item =>{
       if(reserveDupl.length === 0 ){
           return answer;
       }
       if(reserveDupl.includes(item-1)){
          reserveDupl =  reserveDupl.filter(a => a !== item-1)
         
           console.log(reserveDupl)
           return answer += 1;
       }else if(reserveDupl.includes(item+1)){
         
         reserveDupl=  reserveDupl.filter(a => a !== item+1)
              console.log(reserveDupl)
           return answer += 1;
       }
   })
   console.log(answer)
   return answer

   console.log(reserveDupl, lostDupl)
}