<template>
  <div>
    <form @submit.prevent="addItem" class="submitForm">
      <input type="text" v-model="newItem">
      <button type="submit">Add Item</button>
    </form>
    <h2>Current: <span class="newItem">{{ newItem }} </span></h2>
  </div>
</template>

<script>
export default {
  name: 'AddTodoForm',
  data() {
    return {
      newItem:''
    }
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.$emit( 'create-item' , this.newItem );
        this.newItem = '';
      }
        
      else alert('U have to enter task')
    }
  }
}
</script>

<style scoped>
.submitForm {
  margin: 30px;
  margin-left: 0;
}

.newItem {
  font-weight: normal;
  font-size: 18px;
}

</style>