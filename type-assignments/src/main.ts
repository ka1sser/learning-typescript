const a = [1, 2, 3] // number array is inferred
let b: number[] = []
const d: Date[] = [new Date()]

b = [4, 5, 6]
// b.push("this will not work") // TypeScript is smart enough to detect this
b.push(7)