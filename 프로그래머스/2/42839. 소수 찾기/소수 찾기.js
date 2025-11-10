let result = new Set();

function isSosu(x) {
    if(x === 1 || x === 0) return;
    let count = 0;
    for(let i =2 ; i * i <= x; i++) {
        if(x % i === 0) count += 1;
    }
    
    if(count === 0) result.add(x);
}

function dfs(n, papers, used) {
    if(n.length > 0) {
        isSosu(Number(n));
    }
    for(let i = 0 ;i < papers.length; i++) {
        // console.log('현재:', n);
        if(used[i]) continue;
        used[i] = true;
        dfs(n + papers[i], papers, used);
        used[i] = false;
    }
}

function solution(numbers) {
    const papers = numbers.split('');
    const used = Array(numbers.length).fill(false);
    
    dfs('', papers, used);
    return result.size;
}