<template>
  <div>
    <h1>{{ myTitle }}</h1>
    <ToggleButton />
    <h2>ToDo Count: {{ myTodos.length }}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToggleButton from "./ToggleButton";
export default {
  components: { ToggleButton },
  name: "ToDoHeader",
  computed: mapGetters(["myTitle", "myTodos"]),
  mounted() {
    console.log(this.myTitle);
  },
};
</script>