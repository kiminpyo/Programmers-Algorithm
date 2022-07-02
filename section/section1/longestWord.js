function solution(a,b){
    const aa= []
    for(let i =0; i< a; i++){
        aa.push(b[i].length)
    }
    const maxLength = Math.max(...aa)
    //출력
    console.log(b.filter(v => v.length == maxLength)[0])
}
solution(5,["sfsddf","SFdfs","3131","waㅈ란ㅇㄹ아ㅣㄹㄴㄹㄴㄹㅇㄴ어ㅏㅣd","sdfsafajklajklrf"])
