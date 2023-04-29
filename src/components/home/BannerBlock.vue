<script setup></script>

<template>
  <section class="section" id="section-banner">
    <div class="row">
      <div class="col-4">
        <img src="@/assets/banner.jpg" class="banner-image" />
      </div>
      <div class="col-12 col-md-8 text-center">
        <img src="@/assets/logo.png" height="128" class="logo" />
        <h1 class="title">Advanced automated<br />pomodoro timer</h1>
        <p class="subtitle">
          Automato is a pomodoro timer for macOS<br />
          which makes pomodoro technique effortless and inevitable.<br />
          The app requires no effort, it starts and stops automatically,<br />
          notifies when you need to take a break.
        </p>
        <Popper content="Unfortunately, Automato is not published yet 😢" :arrow="true" 
                class="btn-download-popper">
          <img class="btn-download" src="@/assets/button-download.svg" />
        </Popper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  position: relative;
  padding-top: 0;
}
.banner-image {
  position: absolute;
  left: -500px;
  height: 600px;
}
@media only screen and (max-width: 1200px) {
  .banner-image {
    left: -700px;
  }
}
@media only screen and (max-width: 1100px) {
  .banner-image {
    left: -600px;
  }
}
@media only screen and (max-width: 995px) {
  .banner-image {
    left: -650px;
  }
}
@media only screen and (max-width: 770px) {
  .banner-image {
    display: none;
  }
}
.logo {
}
.title {
  margin-top: 30px;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 700;
  color: rgb(25, 25, 25);
}
.subtitle {
  margin-top: 30px;
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgb(60, 65, 70);
}
.btn-download {
  margin-top: 30px;
  height: 64px;
  cursor: pointer;
}
.btn-download-popper:deep() * {
  font-weight: 700;
  font-size: 1.3rem;
}
</style>
