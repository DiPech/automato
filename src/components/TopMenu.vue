<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

let renderKey = ref(0);
let isVisible = ref(false);
const downloadUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// https://stackoverflow.com/a/55391752

window.onscroll = () => {
  let prevIsVisible = isVisible;
  isVisible.value = window.scrollY > 600;
  if (prevIsVisible.value != isVisible.value) {
    renderKey.value = Math.random();
  }
};
</script>

<template>
  <header :key="renderKey">
    <nav
      class="navbar navbar-expand-sm navbar-light bg-light"
      :class="{ 'navbar-visible': isVisible }"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <RouterLink to="/">
            <img
              src="@/assets/logo.svg"
              height="48"
              class="d-inline-block align-text-top"
            />
          </RouterLink>
        </a>
        <a class="btn-download" :href="downloadUrl">
          <img
            src="@/assets/button-download.svg"
            height="48"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.btn-download {
  cursor: pointer;
}
.navbar {
  display: none;
  z-index: 1000;
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000;
}
.navbar-visible {
  display: block !important;
  background-color: red;
}
</style>
