const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const [N, M] = n.trim().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const [a, b] = rawArr[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function dfs(node) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
}

let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i)
    count += 1;
  };
}

console.log(count)
