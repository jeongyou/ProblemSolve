function wordCom(w1, w2) {
    let diffrent = 0;
    const word1 = w1.split('')
    const word2 = w2.split('')
    for(let i =0;i<w1.length;i++){
        if(diffrent > 1) return false;
        if(word1[i] !== word2[i]) diffrent += 1;
    }
    if(diffrent === 0) return false;
    if(diffrent === 1) return true;
}

function solution(begin, target, words) {
    const N = words.length;
    const graph = Array.from({length: N + 1}, () => []);
    const dist = Array(N + 1).fill(-1);
    
    for(let i = 0; i < N; i++) {
        if(wordCom(begin, words[i])) {
            graph[0].push(words.indexOf(words[i]) + 1);
        }
    }
    
     for(let i = 0; i < N; i++) {
         for(let j = 0; j < N;j++){
            if(wordCom(words[i], words[j])) {
                graph[i + 1].push(words.indexOf(words[j]) + 1);
            }
         }
    }
    
    
    if(!words.includes(target)) return 0;
    
    
    const queue = [0];
    let head = 0;
    dist[0] = 0
    
    while(head < queue.length){
        const cur = queue[head++];
        
        for(const next of graph[cur]) {
            if(dist[next] !== -1) continue;
            dist[next] = dist[cur] + 1;
            queue.push(next);
        }
    }   
    
    const tIdx = words.indexOf(target) + 1;
    
    return dist[tIdx] === -1 ? 0 : dist[tIdx];
}