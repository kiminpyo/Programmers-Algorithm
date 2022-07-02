function solution(word){
    // 9일때는 5가 나오고,
    //  10일때는 5,6이나온다

        word.length%2 ==1?
        console.log(word[Math.floor(word.length/2)])
        :  word.length%2 ==0
        ?console.log(word[Math.floor(word.length/2)-1],word[Math.floor(word.length/2)])
        : null
 
    

}
solution('12345678')