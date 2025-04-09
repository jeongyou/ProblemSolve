function solution(n) {
    var strArr = String(n).split('').reverse();
    const answer = strArr.map( s => Number(s))
    return answer;
}