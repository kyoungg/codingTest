function solution(q, r, code) {
    var answer = '';
    
    code.split("").map((str,index)=>{
        index%q === r ? answer+=str : ""
    })
    
    return answer;
}