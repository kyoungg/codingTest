function solution(a, b) {
    var answer = 0;
    const ab = Number(`${a}`+`${b}`)
    
    return ab >= 2 * a * b ? ab : 2 * a * b ;
}