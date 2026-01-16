function solution(arr1, arr2) {
    var answer = [];
    const arry1 = arr1.toString().split(",").map(Number)
    const arry2 = arr2.toString().split(",").map(Number)
     
    const sumArray = arry1.map((num,index)=>num+arry2[index])
    
    for(let i=0; i<sumArray.length ; i+=arr1[0].length){
     answer.push(sumArray.slice(i,i+arr1[0].length))
    }
    
    return  answer;
}