import fs from "fs"
const file = fs.readFileSync("inputs/day-2.txt").toString()
const example = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`
let counter = 0

file.split(",").forEach((range) => {
  const [start, end] = range.split("-").map(e => +e);
  for (let i = start!; i <= end!; i++) {
    const item = `${i}`
    if (item.slice(0, Math.floor(item.length / 2)) === item.slice(Math.floor(item.length / 2))) {
      counter += i
    }
  }
})
console.log(counter)
