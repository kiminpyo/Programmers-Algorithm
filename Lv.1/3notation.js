function solution(n){
    // 10진법을 3진법으로
    const three= n.toString(3);
    // 거꾸로 넣을 배열 생성
    const invertThree = []
    // 3진법의 숫자갯수만큼 숫자를 돌림
    for(let i = three.length-1 ; i >= 0; i-- ){
        invertThree.push(three[i])
    }
    // 배열-> 문자열로 변환한 뒤 ,을 제거
    const a = invertThree.toString().replace(/[,]/g,"")
    // 3진법을 10진법으로 바꿈
    return parseInt(a,3)
   

}
solution(50)

const a = [1,2,3,4]
const b= ['1','2','3','4']
const ato = a.map(Number)
const bto = b.map(Number)
console.log(typeof ato[0]) // 전부 number
console.log(typeof bto[0]) // 전부 number
console.log(typeof cto[0]) // 전부 string
const c= "1,2,3,4";
console.log(c.split(",")) // ['1','2','3','4'] 배열 반환