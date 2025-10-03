type Options = {
    debugMode?: boolean
    indentLevel?: number
}

function printNameAndAge(name: string, { debugMode = false, indentLevel}: Options = {}) {
    console.log(name, debugMode, indentLevel)
}

printNameAndAge("sdf")

function sum(...nums: number[]) {
    return // code to add them
}

sum(1,2,4)