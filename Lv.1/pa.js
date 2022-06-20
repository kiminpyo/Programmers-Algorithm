

const participant = ['a','b','c']
const completion = ['a','b']
console.log(participant.find(v => !completion[v]--,completion.map(v=>completion[v]=(completion[v]|0)+1)))

const a = completion.map(v=>completion[v]=(completion[v]|0)+1)
console.log()
var solution=(participant,completion)=> console.log(participant.find(name=>!completion[name]--))
