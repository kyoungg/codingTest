function solution(t, p) {
    
    var answer = 0;
    const array = []
    
    for (let i =0 ; i<t.length ;  i++){
       array.push( t.slice(i,i+ p.length))
    }
    
    array.map((num)=>{
        if(num.length < p.length) return;
        
        else num<=p ? answer++ : answer+=0})
    
    return answer;
}