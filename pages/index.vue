<script lang="ts" setup>
import TodoItem from "~/components/todoItem.vue"
import Todo from "~/models/todo"

const { data: todos }= useFetch<Todo[]>("/api/todos")
</script>

<template>
  <div>
    <todo-item v-for="todo in todos" :key="todo.id" :title="todo.title" :completed="todo.completed" />
  </div>
</template>
