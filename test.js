function solution(n, lost, reserve) {
  // let total = []
  // let j  = 0
  // let reservelength = reserve.length;
  // const arr = reserve.map(v => total.push(v,v+1,v-1))
  // console.log("total" + total)
  // const newTotal = new Set(total)
  // const newTotalArr = [...newTotal]
  // console.log(newTotalArr)
  // newTotalArr.forEach((v,i) => {
  //   if (lost.includes(v)){
  //     reservelength -= reservelength
  //   }else{
  //    console.log(n-lost.length)
  //   }
  //   console.log(lost)
  // })
   

    const reserveTrue= reserve.filter(v=> !lost.includes(v))
    const lostTrue = lost.filter(v => !reserve.includes(v))
     console.log(reserveTrue) // 1,5
    console.log(lostTrue) // 2
  //reserve와 lost가 같은 애들은 뺀다 (자기옷 자기가 입는 것)
  //그러면 남은게 [2],[1,5]가 된다.
  //남은 reserve에서 이제 빌려줄 애들 중 범위를 만듬
  const b  = a.map(v=> [v-1,v+1]) // 2,4,6 [[2,4]]
  console.log(b)
  b.forEach((v,i) =>{
    if(v.includes(lost[i])){
      lostTrue.shift();
    }
  })
    console.log(n-lostTrue.length)
  return n - lostTrue.length
}