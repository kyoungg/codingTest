function solution(s) {    
    let answer = ""
    const numArray = s.split(" ")
    
    return Math.min(...numArray) + " " + Math.max(...numArray);
}