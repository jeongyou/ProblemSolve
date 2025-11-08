const readline = require('fs').readFileSync('dev/stdin').toString().trim();

const input = readline.trim().split("\n");
const [n, ...rawArr] = input;
// ---

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const [R, C] = n.trim().split(' ').map(Number);

const grid = rawArr.map(line => line.trim().split(''));

const jihoon = Array.from({ length: R }, () => Array(C).fill(-1))
const fire = Array.from({ length: R }, () => Array(C).fill(-1))

function fireBfs() {
  const queue = [];
  let head = 0;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === 'F') {
        queue.push([i, j]);
        fire[i][j] = 0;
      }
    }
  }

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      if (grid[nx][ny] === '#') continue;
      if (fire[nx][ny] !== -1) continue;

      fire[nx][ny] = fire[x][y] + 1;
      queue.push([nx, ny]);
    }

  }
}

function jihoonBfs() {
  const queue = [];
  let head = 0;

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === 'J') {
        queue.push([i, j]);
        jihoon[i][j] = 0;
      }
    }
  }

  while (head < queue.length) {
    const [x, y] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
        console.log(jihoon[x][y] + 1);
        return;
      }
      if (grid[nx][ny] === '#') continue;
      if (jihoon[nx][ny] !== -1) continue;
      if (fire[nx][ny] !== -1 && fire[nx][ny] <= jihoon[x][y] + 1) continue;

      queue.push([nx, ny]);
      jihoon[nx][ny] = jihoon[x][y] + 1;
    }
  }

  console.log('IMPOSSIBLE');
  return;
}

fireBfs();
jihoonBfs();

