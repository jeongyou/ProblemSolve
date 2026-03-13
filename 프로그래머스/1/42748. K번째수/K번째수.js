function solution(array, commands) {
    var answer = [];
    
    for(const command of commands) {
        let i = command[0];
        let j = command[1];
        let k = command[2];

        const cutted = array.slice(i-1, j);
        cutted.sort((a, b) => a - b)
        answer.push(cutted[k-1]);
    }
    
    return answer;
}