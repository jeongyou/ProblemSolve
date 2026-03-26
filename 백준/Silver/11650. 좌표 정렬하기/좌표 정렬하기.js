const readline = require('fs').readFileSync(0, 'utf-8').trim();


const input = readline.trim().split("\n");

const N = Number(input[0]);

const points = []

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  points.push([x, y]);
}

points.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

console.log(points.map(p => p.join(' ')).join('\n'));