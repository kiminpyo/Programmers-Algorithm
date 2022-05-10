const arr1 =[[1,2]];
const arr2 =	[[1,2]];

console.log(solution(arr1, arr2));
function solution(arr1, arr2) {
    const answer = [];
    let sum = [];
        for (let i = 0 ; i< arr1.length ; i++ ){
           
            for(let j = 0; j<arr1[i].length; j++){
            
                sum.push(arr1[i][j]+ arr2[i][j])
             
            
            }
            answer.push(sum)
        }
        
    return answer;
}



const r = arr1 + arr2;









