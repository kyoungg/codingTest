function solution(s) {
    var answer = '';
    let array = []
    
    s.split(" ").map((str, i)=>{
     str.split("").map((text, index)=>{
         index === 0 ? answer += text.toUpperCase() : answer += text.toLowerCase()
     })
       if(i !== s.split(" ").length-1) answer+=" "
    })
    
    return answer;
}