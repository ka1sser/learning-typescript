const person = {
  name: "Kai",
  age: 28
}

// const people: { name: string, age: number }[] = [] // too hassle to write and modify if there will be more changes
const people: (typeof person)[] = [] // easier to change-- only one variable to modify if needed

people.push(person)

function sayHi(name: string) {
  console.log(name)
}

type FuncType = typeof sayHi // returns the return type of the function