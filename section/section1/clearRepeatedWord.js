function solution(N,word){
    const c = Object.entries(word)
    console.log(c)
    const a= new Set(word)
    
    console.log([...a])
    const b= new Map(c)
    console.log(b)

}
solution(5,['aaa','bbbb','cccc','aaa','bbbb'])