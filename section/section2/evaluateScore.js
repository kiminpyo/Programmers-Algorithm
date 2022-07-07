//조금 해맸음. 점수계산
function solution(num,score ){
    let total =0;
    let total_sum = 1;
    let arr = []
    for (let i = 1; i < num ; i++){
        if(score[i] == 1){
            total +=1 ;       
    }else if (score[i] == 0){
        total = 0;
    }
    arr[0] =score[0]
        arr.push(total)
      
    }
    console.log(arr.reduce((a,b)=>a+b,0))
}

solution(10,[1,0,1,1,1,0,0,1,1,0])  