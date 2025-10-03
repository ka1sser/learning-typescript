function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
    cb(a+b)
}

sumWithCallback(1, 2, sum => {
    console.log(sum)
})