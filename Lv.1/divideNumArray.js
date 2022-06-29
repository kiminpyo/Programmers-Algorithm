function solution(arr, divisor) {
   
    const a =  arr.filter(v => v % divisor === 0 ).sort((a,b) =>a-b)
    a.length == 0? a.push(-1) : null
      return a
   
     
      
  }