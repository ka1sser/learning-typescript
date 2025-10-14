type Person = {
  readonly id: number,
  name: string
  age: number
}

const person: Person = { id: 1, name: "Kai", age: 28 }
// person.id = 2 # This will throw an error

type NumberArray = readonly number[]

const nums: NumberArray = [1,2,3]