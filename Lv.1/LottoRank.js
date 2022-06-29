function solution(lottos, win_nums) {
    lottos.sort((a,b)=> a-b)
    win_nums.sort((a,b)=> a-b)   
    //0빼기
  const vari= []
  vari.push(lottos.filter(v=> v!= 0)
   .filter(i=> win_nums.includes(i)))
 const zero = lottos.filter(v=>v==0) 
    const min = vari[0]
    const max = [...vari[0],...zero]
  const arr = []
  const rank=[6,5,4,3,2,1]
   rank.forEach((v,i)=>{
     v == min.length? arr.push(i+1): null
     
     v == max.length? arr.push(i+1): null
   })
     min.length ==0? arr.push(6): null
    max.length ==0? arr.push(6):null 
 return arr
 
 

}

// function solution(lottos, win_nums){
    
   
    
//     const answer = [];
//     return answer;
// }


// const lottoNum = Math.floor(Math.random() * 45);

// const totalNum = [];
// const randomNum = [];
// const pickNum = [];
// const successNum =[];
// for(let i = 1 ; i < 46 ; i++ ){
// totalNum.push(i)


// }
// for (let k = 0 ; k < 6; k++){
//     randomNum.push(Math.floor(Math.random()* 45))
   
// }
// for (let j = 0 ; j < 6; j++){
// pickNum.push(Math.floor(Math.random()* 45))
// console.log(pickNum)
// console.log(randomNum)
//     for(let y = 0 ; y < 6 ; y++){
        
//        const success = pickNum.find((v,i) => v === randomNum[y]);
//         if(success){
//             successNum.push(success)
//         }
       
//         console.log(successNum)
//     }
// }
