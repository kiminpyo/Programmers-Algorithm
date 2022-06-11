function solution(answers) {
    
    if(answers.length < 1) {
        return answers = []
    }
    const result  =[]

    const arr1  =[1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    
    const arr2 = [ 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0,0,0]
    
    for(let i = 0 ; i < answers.length; i++){

        if(answers[i] ===  arr1[i % arr1.length]  ) score[0] += 1;
        if(answers[i] ===  arr2[i % arr2.length]) score[1] += 1;
        if(answers[i] === arr3[i % arr3.length]) score[2] += 1;
    }

    const newScore = [...score];
    const maxScore = Math.max(...score);

    
    for(let i = 0 ; i < 3 ; i ++){
        console.log(newScore)
        console.log(maxScore)
        if(newScore[i] === maxScore) result.push(i + 1)
        console.log(result)
    }
        
   console.log(result)
 
   
    return result;
  }
  solution([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5])