// 문제 처음에 못 풀었음
const arr= [20,8,23,21,10,19,26,6,14]
// 힌트알고 푼 풀이
function solution(arr){
    arr.sort((a,b) => a-b);
    //    arr.reduce((a,b)=>a+b,0<== 여기에 1넣으면 1을 넣은채로 합을 구한다. = 141이됨)
   const result = arr.reduce((a,b)=>a+b,0)  
     console.log(result)
    for(let i = 0 ; i < 8 ; i++){
        for(let k = i+1 ; k <9; k++){
            if(result- (arr[i]+arr[k]) ==100){
                console.log(arr[k], arr[i])
             const answer = arr.filter(a=> a != arr[i]).filter(v=> v != arr[k])
             console.log(answer)
                return answer;
            }
        }
    }
    //강의풀이
    // let answer= arr;
    // let sum= arr.reduce((a,b)=> a+b,0)
    // for(let i = 0 ; i < 8 ; i++){
    //     for(let k = i+1 ; k <9; k++){
    //         if(result- (arr[i]+arr[k]) ===100){
    //             console.log(arr[k], arr[i])
    //         //순서가 중요하다. j를 무조건 먼저 지워야 i에 문제가 안생긴다. i를 먼저 지우면 index번호가 당겨지게 되고 당겨진채로 j를 지우면 원하는 값이 안나옴 
    //         arr.splice(j,1); //i번에 한개를 지우겠다.
    //         arr.splice(i,1)
          
    //         }
    //     }
    // }

  
}
solution(arr)