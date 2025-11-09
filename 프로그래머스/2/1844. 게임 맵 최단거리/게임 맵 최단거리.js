const dx = [1,-1,0,0]; 
const dy = [0,0,1,-1]; 

function solution(maps) {
    const r = maps.length;
    const c = maps[0].length;
    
    const dist = Array.from({length: r}, () => Array(c).fill(-1));    
    
    const queue = []
    let head = 0;
    
    queue.push([0,0]);
    dist[0][0] = 1;
    
    while(head < queue.length) {
        const [x, y] = queue[head++];
        
        for(let i = 0; i< 4;i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx === r-1 && ny === c-1) {
                return dist[x][y] + 1;
            }
            if(nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            if(maps[nx][ny] !== 1) continue;
            if(dist[nx][ny] !== -1) continue;
            
            dist[nx][ny] = dist[x][y] + 1;
            queue.push([nx,ny])
        }
    }
    
    return -1;
}