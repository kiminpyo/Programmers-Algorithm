function solution(arr, signs) {

    const absArr  = []
    let result = 0
   
    for(let i = 0; i < arr.length; i++){
        if(signs[i]){
                absArr.push(arr[i])
        }else{
            absArr.push(-arr[i])
        }
      
        
    }
    console.log(absArr)
    for(let i = 0; i < absArr.length ; i++){
    
        result += absArr[i]
            console.log("result==" + result)
       
        
    }
    return result;
}


