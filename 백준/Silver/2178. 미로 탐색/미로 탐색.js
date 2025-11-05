const readline = require('fs').readFileSync('dev/stdin').toString().trim();
// const readline = `
// 7 7
// 1011111
// 1110001
// 1000001
// 1000001
// 1000001
// 1000001
// 1111111
// `;
// // 
const input = readline.trim().split("\n");
const [n, ...rawArr] = input;

const [row, col] = n.trim().split(' ').map(Number);

const grid = rawArr.map(line => line.trim().split('').map(Number))

const visited = Array.from({ length: row }, () => Array(col).fill(false));
const dist = Array.from({ length: row }, () => Array(col).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(startX, startY) {
  const queue = [];

  queue.push([startX, startY]);
  visited[startX][startY] = true;
  dist[startX][startY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === row - 1 && y === col - 1) return dist[x][y];

    for (let i = 0; i < 4; i += 1) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
      if (visited[nx][ny]) continue;
      if (grid[nx][ny] === 0) continue;

      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

console.log(bfs(0, 0));