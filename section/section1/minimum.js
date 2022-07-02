//7개의 수가 주어질때 그 중 가장 작은 수
function solution(n){
    // math함수 사용(배열이든, 문자열이든 ...전개연산자로 )
    const a = Math.min(...n)

    console.log(...n)
    console.log(a)
}
// solution([2,2,3,4,56,7,8])
solution('77455')
