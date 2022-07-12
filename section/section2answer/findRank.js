// 내풀이
// function solution(N,rank){
//     let stuRank = 1
//     const answer =[]
//     for(let i = 0; i<rank.length; i++){
//         for(let j = 0; j <rank.length; j++){
//             rank[j] > rank[i]? stuRank += 1: null
            
//         }
//         answer.push(stuRank)
//         stuRank = 1
//     }
//     console.log(answer) //출력
// }

function solution(arr){
    let n = arr.length;
    // 1차원배열 초기화
    let answer= Array.from({length:n}, ()=>1)
    console.log(answer)
    for(let i = 0 ; i<n; i++){
        for(let j=0; j< n; j++){
            if(arr[j]> arr[i])answer[i]++;
        }
    }
    console.log(answer)
}
solution([92,92,92,100,90])