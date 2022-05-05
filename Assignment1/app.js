Vue.component('todos', {
  template: `
    <form @submit.prevent="addItem" v-if="!isHidden" class="submitForm">
      <input type="text" v-model="newItem">
      <button type="submit">Submit</button>
    </form>
  `,
  data() {
    return {
      newItem: ''
    }
  }
})
new Vue({
  el: '#app',
  data: {
    newItem: '',
    title: 'Todo App',
    todos: ['get up', 'wash'],
    isHidden: false
  },
  methods: {
    addItem() {
      this.todos = [...this.todos, this.newItem];
      this.newItem = '';
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    }
  }
})