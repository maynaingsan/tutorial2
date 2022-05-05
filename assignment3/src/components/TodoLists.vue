<template>
  <div>
    <ul>
      <TodoItem />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "todoLists",
  components: { TodoItem },
};
</script>

<style>
</style>