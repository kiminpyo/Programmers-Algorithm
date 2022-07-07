function solution(arr){
    // for ..of 돌려보기
    // for(let i of arr){
    //     console.log(i)
    // }

    for(let i =1 ;i < arr.length; i++){
        for(let j =1; j< arr.length; j++){

            if(arr[i][j]> arr[i][j-1] &&  arr[i][j+1] &&  arr[i-1][j]  && arr[i+1][j]  ){
           
                console.log(i,j)
            }
        }
    }
}
solution( [[5, 3, 7, 2, 3], 
            [3, 7, 1, 6, 1],
            [7, 2, 5, 3, 4],
            [4, 3, 6, 4, 1],
            [8, 7, 3, 5, 2]])