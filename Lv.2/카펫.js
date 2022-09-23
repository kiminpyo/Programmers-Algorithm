function solution(brown, yellow) {
    let a = brown + yellow;
  let num =[]
   for(let i = 0; i <= a; i++){
      a % i == 0? num.push(i): null
       
   }
   
 const x  = num.filter((v)=> v < num[Math.floor(num.length/2)])
 const y = num.filter((v)=> v >= num[Math.floor(num.length/2)]) 

  for(let j = 0; j < x.length ; j++){
      let left = x[j]-2;
      let right = y[y.length-j-1]-2
   
   if(left * right  === yellow){
       return  [y[y.length-j-1], x[j]]
   }
      
  }  
if(num.length % 2 != 0){
      return [num[Math.floor(num.length/2)], num[Math.floor(num.length/2)]]
  }
}