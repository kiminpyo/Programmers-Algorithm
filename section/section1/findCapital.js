//문제 2개
 
//대문자 찾기
function solution(word){
    const reg = /[A-Z]/g
    const matchCap = word.match(reg)
    console.log(matchCap) //[ 'K', 'K', 'K', 'Q' ]
    console.log(matchCap.length) //4 <== 출력

//대문자로 변환하기
    const a= word.toUpperCase();
    console.log(a)

//switching 대문자 소문자
    const result = []
    const word1 = "afsJKAkKAKkakKa"
    for(let item of word1){
        const checkC = /[A-Z]/g;
        const checkc = /[a-z]/g;
        word.match(checkC)?  result.push(item.toLowerCase()): word.match(checkc)? result.push(item.toUpperCase()) : null 
        
        
    }
    console.log(result)
}
solution("KoraKdfdKQfd")