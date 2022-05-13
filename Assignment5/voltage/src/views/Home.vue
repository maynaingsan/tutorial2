<template>
  <div class="wrapper">
    <div class="mainvisiual"></div>
    <section class="welcome">
      <div class="container">
        <h2 class="font-ow">Welcome To Our Company</h2>
        <p class="welcome-p font-pp">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
          repetition.
        </p>
      </div>
    </section>
    <!--welcome-->
    <section class="about clearfix">
      <div class="container">
        <div class="txt">
          <h3 class="font-ow">About Of VoltAge</h3>
          <p class="about-p font-pp pc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diamerate nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation.
          </p>
          <p class="about-psp font-pp sp">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diamerate nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullrper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autmteu iriure dolor in hendrerit in
            vulputate velit esse molestee.
          </p>
          <router-link to="/about" class="font-ow btn">Read More</router-link>
        </div>
        <div class="image">
          <img src="@/assets/img/top/img_about.jpg" alt="" class="pc" />
        </div>
      </div>
    </section>
    <!--about-->
  </div>
</template>

<script>
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

export default {
  name: "HomePage",
};
</script>
