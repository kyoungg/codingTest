function solution(name, yearning, photo) {
    let answer = []
    let score = 0
    
    photo.map((photo)=> {
        name.map((name,index)=> {
            if(photo.includes(name)){
                score+=yearning[index];
            } else {
                score+=0
            }
        })
            answer.push(score)
            score = 0
    })
    
    return answer;
}