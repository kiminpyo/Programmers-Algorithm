function solution(numbers, hand) {
    // 첫시도 실패한 풀이
    // const order = []
    // const left = [];
    // const right1 = [];
    // console.log(numbers)
    // console.log(hand)

    // numbers.forEach( (v,i)=>{
    //     if([1,4,7].includes(numbers[i]) && hand == "right"){
    //         order.push("L")
    //         left.push(i)
    //     }else if([3,6,9].includes(numbers[i]) && hand == "right"){
    //         order.push("R")
    //         right1.push(i)
    //     }else if([2,5,8,0].includes(numbers[i]) && hand == "right"){
    //         left[0] == null? left.push("10"): null
    //         right1[0] == null? right1.push("10"): null
    //         numbers[i] == 0 ? 12: null
    //         const leftRange =  numbers[i]- left[left.length-1];
    //         const rightRange = numbers[i]- right1[right1.length-1];
    //         if(Math.abs(leftRange) <Math.abs(rightRange)){
    //             order.push("L")
    //             left.push(i)
    //         }else if(Math.abs(leftRange) >= Math.abs(rightRange)) {
    //             order.push("R")
    //             right1.push(i)
    //         }
    //     }
    //     if([1,4,7].includes(numbers[i]) && hand == "left"){
    //         console.log('hiy')
    //         order.push("L")
    //         left.push(i)
    //     }else if([3,6,9].includes(numbers[i]) && hand == "left"){
    //         console.log('hey')
    //         order.push("R")
    //         right1.push(i)
    //     }else if([2,5,8,0].includes(numbers[i]) && hand == "left"){
    //         console.log('hay')
    //         left[0] == null? left.push("10"): null
    //         right1[0] == null? right1.push("12"): null
    //         numbers[i] == 0 ? numbers[i]= 12: null
    //         console.log(numbers[i])
    //         const leftRange =  numbers[i]- left[left.length-1];
    //         const rightRange = numbers[i]- right1[right1.length-1];
    //         if(Math.abs(leftRange) <= Math.abs(rightRange)){
    //             order.push("L")
    //             left.push(i)
    //         }else if(Math.abs(leftRange) > Math.abs(rightRange)) {
    //             order.push("R")
    //             right1.push(i)
    //         }
    //     }
    // })
    // console.log(order)
    // return order.toString().replace(/,/g,"")


}
solution([1, 3, 0, 5, 8, 2, 1, 4, 5, 9, 5],"left")