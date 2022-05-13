<template>
  <div class="wrapper">
    <section class="post">
      <div class="container">
        <h2>{{ product.title }} </h2>
        <div class="clearfix">
          <img v-bind:src="product.image" alt="productImage">
          <div class="f-right">
            <p class="font-pp">{{ product.description }}</p>
            <router-link to="/product" class="tabBtn btn font-ow">Go Back</router-link>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "ProductDetail",
  data() {
    return {
      product: {}
    }
  },
  created() {
    axios.get(`http://localhost:3000/product/${this.$route.params.id}`)
    .then(response => {
      this.product = response.data;
    })
  }
}
</script>

<style>

</style>