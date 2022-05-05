export default {
  state: {
    todos: [],
    isHidden: false,
    title: "Todo App",
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
    myTitle(state) {
      return state.title;
    },
    isHidden(state) {
      return state.isHidden;
    },
  },
  mutations: {
    addItem(state, newItem) {
      if (newItem) {
        state.todos.push(newItem);
        state.newItem = '';
      }
      else alert('U have to enter task')
    },
    deleteItem(state, index) {
      state.todos.splice(index, 1);
    },
    toggle(state, isHidden) {
      state.isHidden = !isHidden;
    }
  },
  actions: {
    addItem({ commit }, newItem) {
      commit("addItem", newItem);
      newItem = "";
    },
    deleteItem({ commit }, index) {
      commit("deleteItem", index);
    },
    toggle({ commit }, isHidden) {
      commit("toggle", isHidden);
    }
  }
};
