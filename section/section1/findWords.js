function solution(word,a){
  //word를 다 탐색해서 문자열 개수 찾기
    let b =0
    for(let i of word){
        i ==="C"? b += 1: null
        console.log(b)
    }
    // 정규식으로 해보기  RegExp 변수를 정규 표현식 객체 생성자를 이용해 패턴 정의;
    const arg = new RegExp(a,"gi") // a = "C"
    const exceptC = word.replace(arg,"") //c를 제외한 나머지 추출
    const result = word.length- exceptC.length //전체 길이에서 c를 제외한 길이 뺌
    console.log("c의 길이 ==>"+ result)    
    
    
    //match함수 이용 (배열을 리턴한다.)
    const result1 = word.match(arg) //[ 'C', 'C', 'C', 'C', 'C', 'C' ]
    console.log(result1.length + "<== c의 개수")
}
solution("ComfjslkfCjjkCjkjkCjkjkCjkCk","C")
