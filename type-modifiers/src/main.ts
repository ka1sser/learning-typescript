type Person = {
  name: string
  age: number
}

type PersonWithId = Person & { id: number }

const person: PersonWithId = {
  name: "Kai",
  age: 28,
  id: 1
}