import fs from "fs"
const file = fs.readFileSync("inputs/day-1.txt").toString()
const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`
let counter = 0
let dial = 50
for (const move of file.split("\n")) {
  const sign = move.includes("L") ? -1 : 1
  const amount = +move.slice(1)
  dial += sign * amount
  while (dial >= 100) {
    dial -= 100
  }
  while (dial < 0) {
    dial += 100
  }
  if (dial === 0) {
    counter++
  }
}
console.log(counter)
