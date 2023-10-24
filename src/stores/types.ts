export type Todo = {
  text: string,
  id: string,
  done: boolean
}

export type State = {
  count: number,
  todos: Todo[]
}
