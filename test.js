function solution(s) {
    var answer = 0;
    return answer;
}
const answer=[]
const  result = []
const arr= ['zero','one','two','three','four','five','six','seven','eight','nine']
const string = "1two3four3four55sixsixsixsix"
const numArr = string.replace(/[^0-9]/g, '')
console.log(numArr)
const stringArr = string.replace(/[^a-z]/g, ' ') //문자열로 변환


console.log(stringArr)
console.log(string)
console.log(stringArr.split(' '))

for(let i = 0; i < stringArr.split('').length; i++){
        
   const stringAns = arr.filter((v)=> v ===  stringArr.split(' ')[i])
    console.log("stringAns"+stringAns)
   
 answer.push(stringAns)
 
    console.log("answer"+ answer)
}

console.log(answer)
for(let j = 1 ; j <answer.length ; j++){
 
    
   const stringToNum = arr.indexOf(answer[j][0])
   console.log(stringToNum)
 
    result.push(parseInt(stringToNum))
    
}



