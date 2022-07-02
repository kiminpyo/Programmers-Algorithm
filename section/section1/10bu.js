function solution(num,car){
  
    const a = []
car.forEach(v=>{
    //slice가 한개일때는 한개의 인덱스 번호부터 잘라서 배열로 반환
    // 두개일때는 start인덱스부터 end인덱스 ***까지***=> 까지는 그 전이다. ***자른 애를 반환***
    // slice로 한다면, slice(1)도 되면서 slice(1,2)도 된다.
    console.log(v.toString().slice(1,2))
   a.push(v.toString().slice(1,2))
})
console.log(a)
    console.log(a.filter(v=> v == num).length)

}

solution(2,[21,52,42,22,67,34,99])