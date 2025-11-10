const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---
const [N, M] = n.split(' ').map(Number);
const campus = Array.from({ length: N }, () => Array(M).fill(''));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const queue = [];
let head = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    campus[i][j] = rawArr[i].split('')[j];

    if (campus[i][j] === 'I') {
      queue.push([i, j]); visited[i][j] = true;
    };
  }
}

let count = 0;

while (head < queue.length) {
  const [x, y] = queue[head++]

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny]) continue;
    if (campus[nx][ny] === 'X') continue;
    if (campus[nx][ny] === 'P') count += 1;

    visited[nx][ny] = true;
    queue.push([nx, ny]);
  }
}

console.log(count === 0 ? 'TT' : count)

