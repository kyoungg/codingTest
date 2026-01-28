function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map((num)=>{
        if(num.slice(s,s+l) > k){
            answer.push(num.slice(s,s+l))
        }
    })
    
    return answer.map((num)=>Number(num));
}