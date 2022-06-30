// 세 변의 길이를 알 때 
//(가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.)
// 두 변의 길이와 그 사이 끼인각의 크기를 알 때
// 한 변의 길이와 양쪽 끝각의 크기를 알 때

function solution(a,b,c){
 //첫번째  방법
 //가장 긴 변의 길이를 구한다. 그 후 나머지 2개의 길이와 더해본다.
    const Arr = [a,b,c]
    //가장 긴 변의 인덱스를 찾아 나머지와 비교
   const max = Math.max(...Arr)
   const add = (a,b) => a+b
    const e = Arr.filter(v => v != max)
     const f = e.reduce(add,0) 
     if(max > f ){
        // return 'no'
     } else{
        // return 'yes'
     }
     //두번째 방법 
    //  
   let answer= "YES", max1;
   let sum = a+b+c
   if(a>b) max1= a;
   else max= b;
   if(c> max1 ) max= c;
     if((sum-max)<= max) answer="NO"
     return answer; 
     
}
solution(1,3,6)