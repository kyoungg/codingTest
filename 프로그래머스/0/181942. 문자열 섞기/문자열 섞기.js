function solution(str1, str2) {
    var answer = '';
    const str1Array = str1.split("")
    const str2Array = str2.split("")
    
    str1Array.map((str,index)=>{
        answer += str
        answer += str2Array[index]
    })
    
    
    return answer;
}