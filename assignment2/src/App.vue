<template>
  <div id="app" class="todo">
    <ToDoHeader title="ToDo App" @toggle="toggle" :isHidden="isHidden"></ToDoHeader>
    <h2>ToDo Count: {{ toDoLists.length }}</h2>
    <div v-show="isHidden">
    <AddTodoForm @create-item = "addItem"></AddTodoForm>
    </div>
    <TodoLists :toDoLists = "toDoLists" @delete-item="deleteItem"></TodoLists>
  </div>
</template>

<script>
import AddTodoForm from './components/AddTodoForm'
import TodoLists from './components/TodoLists'
import ToDoHeader from './components/ToDoHeader'

export default {
  name: 'App',
  components: {
    AddTodoForm,
    TodoLists,
    ToDoHeader,
  },
  data() {
    return {
      toDoLists:[],
      isHidden: false
    }
  },
  methods:{
    addItem(item) {
      this.toDoLists.push(item)
    },
    deleteItem(index) {
      this.toDoLists.splice(index, 1);
    },
    toggle() {
      this.isHidden = !this.isHidden;
    }
  }
}
</script>

<style scoped>
.todo {
  margin-top: 10%;
  margin-left: 40%;
}
</style>

