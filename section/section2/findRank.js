//못풀었다.
function solution(num,rank){
    const order= rank.sort((a,b)=> b-a)
    console.log(order)
    const print = []
  for(let i = 0 ; i < num ; i++){
    const c  = rank.map((v,a)=> order.findIndex(item=> item == v))
    console.log(c)
  } 


 
}


solution(5,[87,89,92,100,89,12,22])