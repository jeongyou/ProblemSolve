function solution(num1, num2) {
    var answer = 0;
    answer = num1 / num2 * 1000;
    answer = Math.trunc(answer);
    return answer;
}