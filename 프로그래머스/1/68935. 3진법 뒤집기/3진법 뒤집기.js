/*
1. n을 3으로 나눴을 때의 나머지가 3진법의 한자릿 수이다.
2. n을 3으로 나눈 몫이 0일 될 때까지 3으로 나누는 작업을 반복해서 n을 3진법으로 변환한다.
3. 이 수를 뒤집는다.
4. 다시 10진법으로 표현하려면 각 자리 수에 3을 제곱하고 각 자리 수의 수를 곱한 값을 모두 더한다. (1200 => 1*3^3 + 2*3^2 + 0*3^1 + 0*3^0)
5. 그 값을 리턴한다.
*/

function solution(n) {
    let ternaryNum = [];
    while(n !== 0) {
        let mod3 = parseInt(n % 3);
        ternaryNum.unshift(mod3);
        n = parseInt(n / 3);
    }
    
    let toDecimal = 0;
    ternaryNum.forEach((n, idx) => {
        toDecimal += n * 3 ** idx;
    })
    
    return toDecimal;
}