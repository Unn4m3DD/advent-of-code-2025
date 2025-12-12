import fs from "fs"
const Heap = require("heap")
const file = fs.readFileSync("inputs/day-8.txt").toString()

const example = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`
const iterations = 1000
const boxes = file.split("\n").map(e => e.split(",").map(e => +e))
const dist = (a: number[], b: number[]) => {
  return Math.pow(a[0]! - b[0]!, 2) + Math.pow(a[1]! - b[1]!, 2) + Math.pow(a[2]! - b[2]!, 2)
}
const distHeap = new Heap((a: number[], b: number[]) => {
  return a[2]! - b[2]!
});
boxes.forEach((e, i) => {
  boxes.slice(i + 1).forEach((f, j) => {
    distHeap.push([e.join(","), f.join(','), dist(e, f)])
  })
})
const links: string[][] = []
for (let i = 0; i < iterations; i++) {
  const [c1, c2] = distHeap.pop()
  const c1Node = links.findIndex(
    e => e.includes(c1) && !e.includes(c2)
  )
  const c2Node = links.findIndex(
    e => e.includes(c2) && !e.includes(c1)
  )
  if (c1Node !== -1 && c2Node !== -1) {
    links[c1Node] = [...new Set(links[c1Node]?.concat(links[c2Node]!))]
    links.splice(c2Node, 1)
    continue
  }
  if (c1Node !== -1) {
    links[c1Node]!.push(c2)
    continue
  }
  if (c2Node !== -1) {
    links[c2Node]!.push(c1)
    continue
  }
  const bothNode = links.findIndex(
    e => e.includes(c2) && e.includes(c1)
  )
  if (bothNode === -1) {
    links.push([c1, c2])
    continue
  }
}

console.log(links.sort((a, b) => b.length - a.length).slice(0, 3).reduce((acc, next) => acc * next.length, 1))
