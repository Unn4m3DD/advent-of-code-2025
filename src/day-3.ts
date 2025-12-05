import fs from "fs"
const file = fs.readFileSync("inputs/day-3.txt").toString()
const example = `987654321111111
811111111111119
234234234234278
818181911112111`
let counter = 0

file.split("\n").forEach((line) => {
  const [lIdx, l] = line.slice(0, -1).split("").reduce((acc, next, idx) => {
    if (acc[1] < +next) {
      return [idx, +next] as [number, number]
    }
    return acc
  }, [0, -Infinity] as [number, number])
  const r = line.slice(lIdx+1).split("").reduce((acc, next, idx) => {
    if (acc[1] < +next) {
      return [idx, +next] as [number, number]
    }
    return acc
  }, [0, -Infinity] as [number, number])[1]
  counter += +`${l}${r}`
})
console.log(counter)