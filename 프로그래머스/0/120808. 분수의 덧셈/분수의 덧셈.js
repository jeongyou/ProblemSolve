function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const mom = denom1 * denom2;
    const child = denom1 * numer2 + denom2 * numer1;
    let maxNum = i;
    for(var i = 1; i <= child; i++) {
        if(mom%i === 0 && child%i === 0) {
            maxNum = i;
        }
    }
    answer.push(child/maxNum);
    answer.push(mom/maxNum);
    return answer;
}