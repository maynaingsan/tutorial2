<template>
  <div>
    <button @click="toggle(isHidden)">
      <span v-if="isHidden === true">Hide Form</span>
      <span v-if="isHidden === false">Show Form</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ToggleButton",
  computed: mapGetters(["isHidden"]),
  methods: mapActions(["toggle"]),
};
</script>