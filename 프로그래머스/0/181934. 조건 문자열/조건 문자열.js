function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if(ineq === "<"){
        eq === "=" ? answer = n<=m : answer = n<m;
    } else{
        eq === "=" ? answer = n>=m : answer = n>m;
    }
    
    return answer === true ? 1 : 0;
}