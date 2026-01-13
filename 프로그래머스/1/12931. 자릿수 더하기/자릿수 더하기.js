function solution(n)
{
    let answer = n.toString().split("").map(Number).reduce((acc,cur)=>acc+=cur);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('answer')

    return answer;
}