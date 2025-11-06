const readline = require('fs').readFileSync('dev/stdin').toString().trim();
// const readline = `
// 2 2
// 1 -1
// -1 1
// `;

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const [M, N] = n.trim().split(' ').map(Number);

const grid = rawArr.map(line => line.trim().split(' ').map(Number));

const dist = Array.from({ length: N }, () => Array(M).fill(-1))

function main() {
  // 큐를 선언
  const queue = [];
  let head = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
        dist[i][j] = 0;
      }
    }
  }

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (dist[nx][ny] !== -1) continue;
      if (grid[nx][ny] !== 0) continue;

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}

main();
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 0 && dist[i][j] === -1) {
      console.log(-1)
      return;
    }
    if (dist[i][j] !== -1)
      answer = Math.max(answer, dist[i][j]);
  }
}

console.log(answer)
