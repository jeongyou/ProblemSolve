/*
1. d 배열을 돌면서 각 요소를 더한다. 
2. 더한 값이 budget보다 작거나 같으면 index 값에 1을 더해서(0일 수도 있으니까) return 한다.
*/

function solution(d, budget) {
    let sum = 0;
    let result = 0;
    const sort = d.sort((a,b)=> a-b)
    sort.forEach((coast, idx) => {
        sum += coast;
        if(sum <= budget) {
            result = idx + 1;
        }
    })
    return result
}