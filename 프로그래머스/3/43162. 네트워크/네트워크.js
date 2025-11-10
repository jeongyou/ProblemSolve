function dfs(visited,computers, node, n) {
    visited[node] = true;
    
    for(let i = 0; i < n; i++) {
        if(computers[node][i] === 1 && !visited[i])
            dfs(visited, computers,  i, n);
    }
}

function solution(n, computers) {
    const visited = Array(n).fill(false);
    let count = 0;
    
    for(let i = 0; i < n; i++) {
        console.log(visited[i])
        if(!visited[i]) {
            dfs(visited, computers,  i, n);
            count += 1;
        }
    }
    
   return count;
}

