import fs from "fs"
const file = fs.readFileSync("inputs/day-5.txt").toString()
const example = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`
let counter = 0
const [p1, p2] = file.split("\n\n")
const ranges = p1!.split("\n").map(e => e.split("-").map(e => +e))
p2!.split("\n").map(e => +e).forEach(e => {
  for(const range of ranges){
    if(range[0]! <= e && e <= range[1]!){
      counter++
      break;
    }
  }
})

console.log(counter)