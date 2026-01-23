function solution(my_string, index_list) {
    var answer = '';
    
    const stringArray=my_string.split("")
    
    index_list.map((num)=>answer+=stringArray[num])
    
    return answer;
}