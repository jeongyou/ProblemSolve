const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---
const [N, M] = n.split(' ').map(Number);
const numbers = rawArr[0].split(' ').map(Number).sort((a, b) => a - b);
const used = Array(N).fill(false);
const soon = [];
const soonArr = new Set();

function dfs(depth) {
  if (depth === M) {
    soonArr.add([...soon].join(' '))
    return;
  }

  for (let i = 0; i < N; i++) {
    if (used[i]) continue;
    used[i] = true;
    soon.push(numbers[i]);
    depth += 1;
    dfs(depth);
    depth -= 1;
    soon.pop();
    used[i] = false;
  }

}

dfs(0);

const result = Array.from(soonArr);
result.forEach(r => console.log(r))



