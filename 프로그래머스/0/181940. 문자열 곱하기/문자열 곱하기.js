function solution(my_string, k) {
    var answer = new Array(k).fill(my_string).join("");
    return answer;
}