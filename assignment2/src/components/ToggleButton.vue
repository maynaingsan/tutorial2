<template>
  <div>
     <button @click="toggle">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name:'ToggleButton',
  methods: {
    toggle() {
      this.$emit("toggle");
    }
  }
}
</script>