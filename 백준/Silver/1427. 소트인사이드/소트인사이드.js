const readline = require('fs').readFileSync(0, 'utf-8').trim();


const input = readline.trim().split("\n");

const arr = input[0].split('').map(Number).sort((a, b) => b - a);

console.log(arr.join(''));