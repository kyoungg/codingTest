function solution(num_list) {
    var answer = 0;

    
    return num_list.reduce((cur,acc)=>cur*acc) < num_list.reduce((cur,acc)=>cur+acc)**2 ? 1 : 0 ;
}