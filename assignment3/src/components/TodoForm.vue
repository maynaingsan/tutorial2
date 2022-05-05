<template>
  <div v-show="isHidden">
    <form @submit.prevent="addItem(newItem)" class="submitForm">
      <input type="text" v-model="newItem" />
      <button type="submit">Add Item</button>
    </form>
    <h2>
      Current: <span class="newItem">{{ newItem }} </span>
    </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddTodoForm",
  data() {
    return {
      newItem: "",
    };
  },
  computed: mapGetters(["isHidden"]),
  methods: {
    addItem(newItem) {
      this.$store.dispatch("addItem", newItem);
      this.newItem = "";
    },
  },
};
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