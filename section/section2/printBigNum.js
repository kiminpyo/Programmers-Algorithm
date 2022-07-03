function solution(Num,arr){
    const arr1 = [0,...arr]
    let result = []
      for(let i = 0; i< Num+1; i++){

        arr1[i] < arr1[i+1]? result.push(arr1[i+1]): null
        //출력 7 9 6 12
    
      }
      console.log(result)
       
}
solution(6,[7,3,9,5,6,12])