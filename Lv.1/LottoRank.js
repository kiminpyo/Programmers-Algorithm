
function solution(lottos, win_nums){
    
   
    
    const answer = [];
    return answer;
}


const lottoNum = Math.floor(Math.random() * 45);

const totalNum = [];
const randomNum = [];
const pickNum = [];
const successNum =[];
for(let i = 1 ; i < 46 ; i++ ){
totalNum.push(i)


}
for (let k = 0 ; k < 6; k++){
    randomNum.push(Math.floor(Math.random()* 45))
   
}
for (let j = 0 ; j < 6; j++){
pickNum.push(Math.floor(Math.random()* 45))
console.log(pickNum)
console.log(randomNum)
    for(let y = 0 ; y < 6 ; y++){
        
       const success = pickNum.find((v,i) => v === randomNum[y]);
        if(success){
            successNum.push(success)
        }
       
        console.log(successNum)
    }
}
