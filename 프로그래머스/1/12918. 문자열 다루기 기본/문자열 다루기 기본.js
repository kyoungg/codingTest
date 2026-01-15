function solution(s) {
    const haveElse = /[^0-9]/g;
    var answer = ""
    
    if(s.length === 4 || s.length === 6){
       answer = !haveElse.test(s)
    } else {
       answer = false
    }
    return answer;
}