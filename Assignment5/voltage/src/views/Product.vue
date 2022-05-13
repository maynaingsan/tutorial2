<template>
  <div class="wrapper">
    <div class="mainvisiual mainvisiual-about">
      <h2 class="font-pp">
        Our Product<br /><span class="font-ow">We Provide Best Quality</span>
      </h2>
    </div>
    <section class="range">
      <div class="container">
        <h2 class="font-ow">Range Of Products</h2>
        <p class="font-pp">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diamerate nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullrper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autmteu iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, illump dolore eu feugiat.
        </p>
        <div class="list">
          <ul class="font-pp clearfix">
            <li>
              <img src="@/assets/img/top/img_bread.png" alt=""/>
              <p>Bread</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_cake.png" alt="" />
              <p>Cake</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_cookie.png" alt="" />
              <p>Cookie</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--range-->
    <section class="product">
      <div class="container">
        <h2 class="font-ow">Our Products</h2>
        <ul class="tab font-pp clearfix">
          <li class="tablinks"><a href="">Avaliable Products</a></li>
          <li class="tablinks"><a href="">Featured Products</a></li>
        </ul>
        <div class="tabcontent">
          <ul class="clearfix font-pp" >
            <div v-for="products in product" :key="products.id">
              <li>
              <img v-bind:src="products.image" alt="productsImage" class="productImage" />
              <p>{{products.title}}</p>
              <router-link :to="`/product/${products.id}`" class="tabBtn btn font-ow">More Detail</router-link>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <!--product-->
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

import axios from "axios";

export default {
  name: "ProductPage",
  data() {
    return {
      product: []
    }
  },
  created() {
    axios.get('http://localhost:3000/product')
    .then(res => {
      this.product = res.data
    });
  }
};
</script>
