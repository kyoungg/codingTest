function solution(names) {
    var answer = [];
    
    names.map((name,index)=>{
        index%5 === 0  && answer.push(name)    
    })
    
    return answer;
}