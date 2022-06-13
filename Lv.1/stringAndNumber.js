function solution(s) {
    const answer = 0;

    function replacer(match){
        console.log(match)
        let arrNum = {zero:0,one:1,two:2,three:3,four:4,five:5,six: 6,seven:7,eight:8,nine:9}

        console.log(arrNum[match])

         return arrNum[match];
     }
     console.log(Number('12'))
     answer = parseInt((s.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/g,replacer)),10);
     console.log(answer)
     console.log(Number(answer))
    
    return answer;
    }
    solution('one2three444one2three444one2three444one2three444one2three444one2three444one2')