const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---
const N = Number(n);

const s = Array(Number(n)).fill(0);
const b = Array(Number(n)).fill(0);

for (let i = 0; i < n; i++) {
  const [S, B] = rawArr[i].split(' ').map(Number);

  s[i] = S;
  b[i] = B;
}

//dfs로 풀
let answer = Infinity;

function dfs(idx, 직전의신맛곱, 직전의쓴맛합, 한번이상썼는지) {
  if (idx === N) {
    if (한번이상썼는지) {
      answer = Math.min(answer, Math.abs(직전의신맛곱 - 직전의쓴맛합))
    }
    return;
  }

  //아니면
  dfs(idx + 1, 직전의신맛곱 * s[idx], 직전의쓴맛합 + b[idx], true);
  dfs(idx + 1, 직전의신맛곱, 직전의쓴맛합, 한번이상썼는지);

}

dfs(0, 1, 0, false);

console.log(answer)
