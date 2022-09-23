function solution(n) {
   
    let a = [];
    a[0] = 0;
    a[1] = 1;
    a[2]= 1;
    for(let i = 3 ; i<= n; i ++){
        a[i] = (a[i-2])%1234567 + (a[i-1])%1234567

    }
       return a[n]%1234567
}