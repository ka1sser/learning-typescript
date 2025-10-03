function printName(name: string, name2:string) {
    console.log(name, name2)
}

function sum(a: number, b: number): number {
    return a+b
}

const c = sum(1, 2)

function printPerson(person: {name: string}) {
    console.log(person.name)
}

printPerson({ name: "Kai" })
printPerson({ name: "Edward Elric", age: 19 }) // this will not work BUT

const person = { name: "Edward Elric", age: 19 }
printPerson(person) // this will work