function solution(citations) {
    const n = citations.length;
    
    // 배열 정렬
    citations.sort((a, b) => a - b);
    
    // for 문 돌면서 
    // 전체 길이 - idx <= value 면 return 그 이상 논문이 몇편인지
    for(let i = 0; i < n; i++) {
        if((n - i) <= citations[i]) return n - i;
    }
    
    return 0
}