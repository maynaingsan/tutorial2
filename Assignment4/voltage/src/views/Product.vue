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
              <img src="@/assets/img/top/img_bread.png" alt="" class="pc" />
              <img src="@/assets/img/top/img_breadsp.png" alt="" class="sp" />
              <p>Bread</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_cake.png" alt="" class="pc" />
              <img src="@/assets/img/top/img_cakesp.png" alt="" class="sp" />
              <p>Cake</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_cookie.png" alt="" class="pc" />
              <img src="@/assets/img/top/img_cookiesp.png" alt="" class="sp" />
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
          <ul class="clearfix font-pp">
            <li>
              <img src="@/assets/img/top/img_bc.jpg" alt="" class="pc" />
              <img src="@/assets/img/top/img_bcsp.jpg" alt="" class="sp" />
              <p>Butter Cake</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_cc.jpg" alt="" class="pc" />
              <img src="@/assets/img/top/img_ccsp.jpg" alt="" class="sp" />
              <p>Chocolate Cake</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_fb.jpg" alt="" class="pc" />
              <img src="@/assets/img/top/img_fbsp.jpg" alt="" class="sp" />
              <p>French Bread</p>
            </li>
            <li>
              <img src="@/assets/img/top/img_pbc.jpg" alt="" class="pc" />
              <img src="@/assets/img/top/img_pbcsp.jpg" alt="" class="sp" />
              <p>Peanut Butter Cookies</p>
            </li>
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

export default {
  name: "ProductPage",
};
</script>
