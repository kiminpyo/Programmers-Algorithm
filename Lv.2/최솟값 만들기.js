function solution(A,B){
    var answer = 0;
    let result = 0;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습다.
     const F= A.sort((a,b)=> a-b)
    const S = B.sort((a,b) => b-a)
    for(let i =0; i < A.length; i++ ){
       result +=  F[i] * S[i]
    }
    
    return result;
}