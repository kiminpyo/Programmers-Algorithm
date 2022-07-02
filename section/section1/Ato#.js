//대문자로 이루어진 영어단어가 입력될 때 A가 포함된 모든 것을 #으로 바꾸어 출력
function solution(word){
   const a=  word.replace(/[A]/g,"#")
   console.log(a)
}

solution("AfjsdkAcjdkAjskfA")