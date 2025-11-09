const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---

const [N, M] = n.trim().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 0; i < M; i++) {
  const [a, b] = rawArr[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs(start) {
  const queue = [];
  let head = 0;
  visited[start] = true;
  queue.push(start);
  while (head < queue.length) {
    const cur = queue[head++];
    for (const next of graph[cur]) {
      if (visited[next]) continue;
      visited[next] = true;
      queue.push(next);
    }
  }
}

let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    count += 1;
  }
}

console.log(count)