function solution(str1, str2) {
    var answer = 0;
    return str2.search(str1) === -1 ? 0 : 1;
}