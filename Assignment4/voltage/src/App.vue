<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
    <FooterMenu />
  </div>
</template>

<script>
import HeaderMenu from "./components/Header.vue";
import FooterMenu from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderMenu,
    FooterMenu,
  },
};
</script>
