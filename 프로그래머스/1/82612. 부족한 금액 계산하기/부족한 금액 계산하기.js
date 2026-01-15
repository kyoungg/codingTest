function solution(price, money, count) {
    var answer = 0
    let allPrice = 0
    
    for (let i =1 ; i <= count; i++) {
        allPrice += price*i
    }

    return  allPrice-money > 0 ? allPrice-money : 0 ;
}