import fs from "fs"
const file = fs.readFileSync("inputs/day-6.txt").toString()
const example = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`

let counter = 0
const input = file.split("\n")
const p1 = input.slice(0, -2).map(e => e.trim().split(/ +/g))
const p2 = input.at(-2)?.trim()?.split(/ +/g)
p2?.forEach((op, i) => {
  counter += p1.map(e => +e[i]!).reduce((acc, next) => {
    if (op === '+') {
      return acc + next
    } else {
      return acc * next
    }
  }, op === "*" ? 1 : 0)
})



console.log(counter)