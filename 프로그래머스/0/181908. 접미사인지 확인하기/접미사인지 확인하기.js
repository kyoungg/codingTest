function solution(my_string, is_suffix) {
    var answer = [];
    var str = [];
    
    for (let i = 0; i < my_string.length; i++) {
        str.push(my_string.slice(i));
    }
    
    str.find((str)=>str===is_suffix ? answer = 1 : answer = 0)
    
    return answer;
}