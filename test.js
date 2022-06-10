let foo = {
    name : "kim",
    age : 20
}

for(let value in foo){
    console.log(value)
    console.log(foo[value])
}
for(let value of Object.keys(foo)){
    console.log(value)
   
}


const goo = [3,5,1,2,4]
console.log(goo.forEach((i)=>{

    let arrA = i * i;
    console.log(arrA)
    goo.unshift(arrA)
    console.log(goo)
}))
console.log("goo" + goo)
const arr = [];
for(let i in goo){
    for(let j in goo){
        const a = i * j;
        arr.push(a)
    }
}
console.log(arr)
for(let item of goo){
     console.log(item) 
}

