function solution(N){
    // 홀수를 찾고 reduce로 홈수를 찾는다.
    const add= (a,b)=> a+b
    // 홀수인 애들
    const a = N.filter(v => v%2 == 1 )
    // 홀수인 애들 더하기
    //  출력=> return a.reduce(add,0)
    // 홀수 중 최솟 값
    const b = Math.min(...a)
    console.log(b)
    // 이것도 최솟 값 구한 것
    console.log(a.sort((a,b)=> a-b)[0])



}

solution([1123,127,86,87,45,22])