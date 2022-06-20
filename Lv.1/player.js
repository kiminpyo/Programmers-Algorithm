function solution(participant, completion) {
    participant.sort()
    completion.sort()
    
    for(let i= 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
    return
}
solution (["marina", "josipa", "nikola", "filipa", "aa"],["josipa", "aa", "marina", "nikola"])


// function solution(participant, completion) {
//     completion.forEach(player => {

//         const index = participant.indexOf(player)
//         console.log(participant.indexOf(player))
//         participant.splice(index,1);
//         console.log(participant)
//     })
//     return participant[0];
// }
// solution (["marina", "josipa", "nikola", "filipa", "aa"],["josipa", "aa", "marina", "nikola"])

const a = ["marina", "josipa", "nikola", "filipa", "aa"]
console.log(a.splice(2,1,'hi'))
a.splice(2,1,'hi')
console.log(a)

const b = ["marina", "josipa", "nikola", "filipa", "aa"]
console.log(b.indexOf('mirina'))
console.log(b.indexOf('marina'))
console.log(b.indexOf('josipa',2))
console.log(b.indexOf('nikola',-1))
console.log(b.indexOf('filipa', -2))
console.log(b.indexOf('filipa', -1))
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

