function solution(num_list, n) {
    var answer = Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n));
    
    return answer;
}