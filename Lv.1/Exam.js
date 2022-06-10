function solution(answers) {
    
    const answer = [];
    const firstPerson = [1, 2, 3, 4, 5];
    const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const correctNum = [0, 0, 0];
  
    for (let i = 0; i < answers.length ; i++) {
      if (answers[i] === firstPerson[i % firstPerson.length]) correctNum[0] += 1;
      if (answers[i] === secondPerson[i % secondPerson.length]) correctNum[1] += 1;
      if (answers[i] === thirdPerson[i % thirdPerson.length]) correctNum[2] += 1;
    }
  
    const maxScore = Math.max(...correctNum);
    console.log(maxScore)
    console.log(correctNum)
    for( let i = 0; i <3 ; i++){
        if(correctNum[i] === maxScore) {
            answer.push(i+1)
        }
    }
    console.log(answer)
    return answer;
  }
