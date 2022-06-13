
const list = [1,2,3,4,5,6,7]
const arr = [1,2,3,4,5]
for(let i =0 ; i < list.length ; i ++){
	 console.log(arr[i % arr.length]) 
    }