function solution(absolutes, signs) {
    let result = 0;
    absolutes.every( (n, idx) => {
        if(signs[idx] === true) {
            return result += n;
        }
        return result -= n;
    })
    return result;
}