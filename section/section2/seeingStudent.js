function solution(student){
const student1 = [0,...student]
       const result= []
student1.forEach((v,i)=>{
        if(v <= student1[i+1]){
            if(student1[i+1]> Math.max(...result)){
                result.push(student1[i+1])
            }
        }
    })
    console.log(result.length) //출력
   
}
solution([130,135,148,140,145,150,150,153,120,12,155,187,190,191,190])