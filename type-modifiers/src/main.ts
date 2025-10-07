let id: number | string | boolean = 1
id = "11"
id = true

type Todo = {
  id: number | string
  status: "Complete" | "Incomplete" | "Draft"
}

const todo: Todo = {
  name: "Laundry",
  status: "Completed"
}

type Adopt = {
  status: string
}

type Animal = {
  isDog?: boolean
  isCat?: boolean
}

let cat1: Adopt | Animal = {
  status: "Available",
  isCat: true
}