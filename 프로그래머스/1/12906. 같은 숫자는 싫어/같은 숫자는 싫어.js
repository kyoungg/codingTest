function solution(arr)
{
    var answer = [];

   arr.map((num,index)=>{
       num !== arr[index-1] || index === 0 ?answer.push(num)  :  null
   })
    
    return answer;
}