function solution(s) {
    var answer = '';
    const stringNum = s.length
    const stringNumHalf = Math.floor(stringNum/2)
    const stringArray = s.split("")
   
    if(stringNum % 2 !== 0){
        return answer = stringArray[stringNumHalf]
    } else {
      return answer = stringArray[stringNumHalf-1] + stringArray[stringNumHalf]
    }
    
}