function solution(s) {
    
    const arrayS = s.split("")
    
    var answer = arrayS.sort().reverse().join("")
    
    return answer;
}