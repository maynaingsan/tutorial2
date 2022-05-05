<template>
  <div> 
    <ul>
      <li
       v-for = "( toDoList , index ) in toDoLists"
        :key = "index"
        class = "list" 
      >
        <TodoItem
         :toDoList="toDoList"
          :index="index"
           @delete-item="deleteItem"
          >
        </TodoItem>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  components: { TodoItem },
  name: 'todoLists',
  props: ['toDoLists'],
  
  methods: {
    deleteItem() {
      this.$emit( 'delete-item' , this.index )
    }
  }
}
</script>

<style>
.list {
  line-height: 30px;
}
</style>