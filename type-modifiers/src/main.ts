type Person = {
  name: string,
  skillLevel: "Beginner" | "Intermediate" | "Expert"
}

function printSkillLevel(skillLevel: Person["skillLevel"]) {
  console.log(skillLevel)
}

const person: Person = {
  name: "Kai",
  skillLevel: "Expert"
}

printSkillLevel(person.skillLevel)

type PeopleGroupedBySkillLevel = {
  [index in Person["skillLevel"]]: Person[]
}

const a: PeopleGroupedBySkillLevel = {
  "Beginner": [
    {name: "Alphonse", skillLevel: "Beginner"}
  ],
  "Intermediate": [
    {name: "Ling", skillLevel: "Intermediate"}
  ],
  "Expert": [
    {name: "Edward", skillLevel:"Expert"}
  ]
}
 
const b = {
  name: "Kai",
  age: 28
}

// type B = (typeof b)["name"] // B has string type
// type B = (typeof b)["age"] // B has number type
type B = (typeof b)[keyof typeof b] // B has string | number type