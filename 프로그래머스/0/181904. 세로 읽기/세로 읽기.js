function solution(my_string, m, c) {
    var answer = "";
    
    my_string.split("").map((str,index)=> index%m === c-1 ? answer+=str : answer+="")
    
    return answer;
}