function solution(n, control) {
    var answer = n;
    
    control.split("").map((str)=>{
        if(str === "w"){
            answer+=1
        } else if(str==="s"){
            answer-=1
        } else if(str==="d"){
            answer+=10
        } else if(str==="a"){
            answer-=10
        }
    })
    
    return answer;
}