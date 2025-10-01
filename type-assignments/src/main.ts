type Person = {
    name: string,
    age: number,
    isProgrammer?: boolean,
    friends: string[],
    address: {
        street: string
    }
}

type ThisIsANumberType = number

const person1: Person = {
    name: "Kai",
    age: 28,
    friends: [],
    address: {
        street: "sesame"
    }
}

const a: ThisIsANumberType = 3 // this works too

interface PersonInterface {
    name: string,
    age: number,
    isProgrammer?: boolean,
    friends: string[],
    address: {
        street: string
    }
}

const person2: PersonInterface = {
    name: "Kai",
    age: 28,
    friends: [],
    address: {
        street: "sesame"
    }
}