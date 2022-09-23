function solution(arr) {
   
    function max(a,b){
        if(b ==0) return a
        else return max(b,a%b)
            
        
    }
  return  arr.reduce((a,b) => (a*b)/ max(a,b))
}