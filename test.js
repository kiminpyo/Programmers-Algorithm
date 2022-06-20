function solution(participant, completion) {
    var answer = '';
    return answer;
}



function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    for (let i = 0; i < completion.length; i++) {
      if (participant[i] !== completion[i]) return participant[i];
    }
    return participant[participant.length - 1];
  }
  solution(["leo", "kiki","eden",'eden'],["eden", "eden","leo"])