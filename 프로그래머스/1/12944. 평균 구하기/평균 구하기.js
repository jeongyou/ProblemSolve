function solution(arr) {
    let sum = 0;
    arr.forEach((a) => {
        sum += a;
    })
    const avg = sum / (arr.length);
    return avg;
}