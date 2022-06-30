function solution(a,b,c){
    //첫번째 방법
    //string-> arr로 변환
    const Arr1= [a,b,c]
    //숫자를 정렬
    Arr1.sort((a,b)=> a-b)
    console.log(Arr1[0])
    
    // 출력 => return Arr1[0]
    
    // 두번째 방법 
    // string-> arr로 변환. 
    // 얕은복사(...)
    // Math.min함수 사용
    const Arr2 = [a,b,c];
    console.log(...Arr2)
    console.log(Math.min(...Arr2)) //o
    console.log(Math.min([123],555,2122,524)) // 123
    // 출력 = >return Math.min(...Arr2)

    // 세번째 방법
    // a가 b와 c보다 작을 때, b가 a와 c보다 작을때, c가 a와 b보다 작을 때
    if(a<b && a<c){
        console.log(a)
        return a
    }else if(b<a && b<c){
        console.log(b)
        return b
    }else  if(c<b && c<a){
        console.log(c)
        return c
    }

    // 네번째 방법
    if(a<b) answer = a;
    else answer =b ;
    if(c < answer) answer =c;
}
solution(10,201,123)