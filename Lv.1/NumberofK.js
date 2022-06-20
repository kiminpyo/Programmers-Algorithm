function solution(array, commands) {
    const a = []
    for(let i=0; i<commands.length;i++){
      const b = array.slice(commands[i][0]-1,commands[i][1])
        b.sort((a,b) => a-b) ;
        a.push(b[commands[i][2]-1])
      
} 
    return a
}