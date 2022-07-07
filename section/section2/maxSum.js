//하드코딩
function solution(arr){
    const  length = arr[0].length *2 +2;
    console.log(length)
    let k = 0
    let sum = []
    let left = 0
    let right = 0
    let j =arr[0].length -1
    for(let i = 0 ; i <arr[0].length; i++){
      for(let j = 0 ; j<arr[0].length ; j++){
        k +=  arr[i][j]
        
      }
      console.log(k)
      sum.push(k)
      k = 0;

   
    }
    for(let i = 0 ; i <arr[0].length; i++){
        for(let j = 0 ; j<arr[0].length ; j++){
          k +=  arr[j][i]
          
        }
        console.log(k)
        sum.push(k)
        k = 0;
  
     
      }
      for(let i = 0 ; i <arr[0].length; i++){
          left +=  arr[i][i]

      }
      for(let i = 0; i <arr[0].length ; i++){
            right += arr[i][j]
            console.log(arr[i][j])
       j--      
      }
    console.log(sum)
    console.log(left,right)
    sum.push(left,right)
    console.log(Math.max(...sum))
}
    solution( [
        [10, 13, 12, 12, 15,16], 
        [12, 39, 87, 23, 11,78],
        [11, 25, 12, 99, 15, 12],
        [19, 27, 29, 37, 27, 22],
        [19, 41, 40, 13, 25, 77],
        [19, 41, 40, 13, 25, 77],
    ])