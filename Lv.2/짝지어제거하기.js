// function solution(s){
//     let result = Array.from(s);
//     if()
//     for(let i =0; i <= s.length/2; i++){
//         const static= 0;
//         a(static)  
//          function a(i){  
//         if(result[i] == result[i+1]) { 
//             const exp =  result.splice(i,2)
//             }else{
//                return a(++i)         
//             }
//         }      
//     }
//         return result.length === 0 ? 1: 0
 
// }
function solution(s){
    let answer = -1;
    let stack = [];
    stack.push(s[0])
    for(let i =1 ; i<s.length; i++){
        if(stack[stack.length-1] === s[i]){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    console.log(stack)
    return stack.length === 0 ? 1 : 0
}