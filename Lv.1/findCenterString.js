function solution(s) {
    const l= s.length;
     return l %2 ===0? s[Math.floor(l/2)-1]+
    s[Math.floor(l/2)]: s[Math.floor(l/2)]
    }