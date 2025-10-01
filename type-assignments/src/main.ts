const person = {
    name: "Kai",
    age: 28
}

// person.isProgrammer = true // this won't work bec it is not defined

const person: { name: string; age: number, isProgrammer: boolean } = {
    name: "Kai",
    age: 28
}

// ^ This is now throwing an error bec isProgammer is not defined

const person: { name: string; age: number, isProgrammer?: boolean } = {
    name: "Kai",
    age: 28
}

// add "?" at the end of the property to tell TS it is only optional