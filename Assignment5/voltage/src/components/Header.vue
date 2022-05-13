<template>
  <div class="wrapper">
    <div class="header clearfix">
      <h1 class="logo">
        <a href="#"
          ><img src="@/assets/img/common/img_logo.png" alt="Logo"
        /></a>
      </h1>
      <nav>
        <!--meuu-list-->
        <ul class="clearfix">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/manufacturing">Manufacturing</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

export default {
  name: "HeaderMenu",
};
</script>
