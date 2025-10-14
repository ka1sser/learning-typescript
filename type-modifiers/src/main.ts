type Person = {
  name: string
  age: number
}

function getValue(key: keyof Person, person: Person) {
  return person[key]
}

const age = getValue("age", {name: "Kai", age: 28})