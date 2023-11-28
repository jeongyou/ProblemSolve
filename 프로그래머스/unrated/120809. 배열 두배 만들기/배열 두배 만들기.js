function solution(numbers) {
    var answer = [];
    answer = numbers.map( element => {
        return element * 2;
    })
    return answer;
}