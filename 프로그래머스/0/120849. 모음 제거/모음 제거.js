function solution(my_string) {
    const filterWord = ["a","e","i","o","u"]
    const splitString = my_string.split("")
    const result = splitString.filter((splitString)=> !filterWord.includes(splitString)).join("")
    
   return  result
}