<template>
<div>
  <h1>{{ title }}</h1>
  <ToggleButton @toggle="toggle">
    <span v-if="isHidden===true">Hide Form</span>
    <span v-if="isHidden===false">Show Form</span>
  </ToggleButton>
</div>  
</template>

<script>
import ToggleButton from './ToggleButton'
export default {
  components: { ToggleButton },
  name: 'ToDoHeader',
  props: [ 'title' , 'isHidden' ],
  methods: {
    toggle() {
      this.$emit("toggle");
    }
  }
}
</script>