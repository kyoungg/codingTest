function solution(number) {
    var answer = 0;
     number.split("").map((num)=>answer += Number(num));
    return answer%9;
    
}