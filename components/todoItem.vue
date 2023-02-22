<script lang="ts" setup>
defineProps<{
  title: string,
  completed: boolean,
}>()
</script>

<template>
  <div>{{title}}</div>
</template>

