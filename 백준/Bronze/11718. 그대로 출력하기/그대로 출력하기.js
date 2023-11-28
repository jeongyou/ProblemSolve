const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n")
let __idx = 0
let ini = () => Number(input[__idx++]) // input next integer
let ins = () => input[__idx++].split(" ").map(Number) // input next split

while (input.length > __idx)
  console.log(input[__idx++]);