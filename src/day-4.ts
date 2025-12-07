import fs from "fs"
const file = fs.readFileSync("inputs/day-4.txt").toString()
const example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`
let counter = 0
const dirs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
] as const
const map = file.split('\n').map(e => e.split(""))
map.forEach((line, li) => {
  line.forEach((col, ci) => {
    let filled = 0
    if (col === "@") {
      dirs.forEach(dir => {
        if (map[li + dir[0]]?.[ci + dir[1]] === "@") {
          filled++
        }
      })
      if (filled < 4) {
        counter++
      }
    }
  })
})
console.log(counter)