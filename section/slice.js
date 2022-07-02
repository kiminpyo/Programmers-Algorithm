const a = "1234546"
const b= [1,2,4,5]
const c= [3,7,11,5]
console.log(a.slice(1,3)) // string 23 반환
console.log(b.slice(1,3))// 배열 [2,4]환
console.log(b.splice(1,3)) // 배열 [2,4,5]반환
console.log(a.substring(1,3)) // string 23반환
console.log(a.indexOf(4)) //3(인덱스)
console.log(a.lastIndexOf(4)) //5(뒤에서부터 인덱스)
console.log(c.find(v=> v >8 )) //11(Num)
console.log(c.findIndex(v => v>8)) //2(인덱스)
