<template>
  <div id="app" class="todo">
    <ToDoHeader />
    <TodoForm />
    <TodoLists />
  </div>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoLists from "./components/TodoLists.vue";
export default {
  name: "App",
  components: {
    ToDoHeader,
    TodoForm,
    TodoLists,
  }
};
</script>

<style>
.todo {
  margin-top: 10%;
  margin-left: 40%;
}
</style>
