function solution(x) {
    const arr = String(x).split('');
    let arrSum = 0
    arr.every( n => arrSum += Number(n));
    
    if(x %  arrSum === 0) {
        return true;
    }
    return false;
}