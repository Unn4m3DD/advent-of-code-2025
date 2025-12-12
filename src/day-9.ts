import fs from "fs"
const file = fs.readFileSync("inputs/day-9.txt").toString()
const example = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3
`
let result = 0
const input = file.split("\n").map(e => e.split(",").map(e => +e))
input.forEach((e, i) => {
  input.slice(i + 1).forEach((f, j) => {
    const area = (Math.abs(f[0]! - e[0]!) + 1) * (Math.abs(f[1]! - e[1]!) + 1)
    if (area > result) {
      result = area
    }
  })
})
console.log(result)
