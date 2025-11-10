const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, m, ...rawArr] = input;
// ---

const N = Number(n);
const M = Number(m);

const friends = Array.from({ length: N + 1 }, () => []);
const dist = Array(N + 1).fill(-1);
const visited = Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const [a, b] = rawArr[i].split(' ').map(Number);
  friends[a].push(b);
  friends[b].push(a);
}

const queue = [1];
let head = 0;
dist[1] = 0;

while (head < queue.length) {
  const cur = queue[head++];

  for (const next of friends[cur]) {
    if (dist[next] === -1) {
      dist[next] = dist[cur] + 1;
      queue.push(next);
    }
  }
}

let count = 0;

for (let i = 2; i <= N; i++) {
  if (dist[i] !== 0 && dist[i] < 3 && dist[i] !== -1) count += 1;
}

console.log(count)