import { defineEventHandler } from "h3"
import Todo from "~/models/todo"

export default defineEventHandler(() => {
  return <Todo[]>[
    {
      id: 0,
      title: "learn vue",
      completed: true
    },
    {
      id: 1,
      title: "learn nuxt",
      completed: false
    },
    {
      id: 2,
      title: "learn react",
      completed: false
    }
  ]
})