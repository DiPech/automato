<script setup>
import { computed, defineProps, defineEmits } from "vue";

import closeImg from "@/assets/close.svg";

const props = defineProps({
  title: String,
  preview: String,
  description: String,
  image: String,
  isLarge: Boolean,
  isFocused: Boolean,
});

const processedDescription = computed(() =>
  props.description
    .replaceAll("<h2>", "<h2 class='header'>")
    .split("\n\n")
    .map((str) => "&nbsp;".repeat(4) + str)
    .join("<br>")
);

const emit = defineEmits(["focus", "unfocus"]);
</script>

<template>
  <div
    v-masonry-tile
    class="masonry-item feature"
    :class="{ large: isLarge, focused: isFocused }"
  >
    <template v-if="!isFocused">
      <div class="title">{{ title }}</div>
      <img :src="image" class="image" />
      <div class="description">
        {{ preview }}
        <br />
        <span class="link" @click="emit('focus')"> read more </span>
      </div>
    </template>
    <template v-if="isFocused">
      <div class="modal-wrapper">
        <div class="modal-body">
          <div class="title">{{ title }}</div>
          <img :src="closeImg" class="button-close" @click="emit('unfocus')" />
          <div class="body-wrapper">
            <img :src="image" class="image" />
            <div class="description">
              <span v-html="processedDescription"></span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.modal-wrapper {
  z-index: 998;
  position: fixed !important;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  overflow-y: scroll;
  overscroll-behavior: contain;
}
.modal-body {
  background-color: white;
  width: calc(100% - 100px);
  height: auto;
  left: 50px;
  top: 50px;
  margin-bottom: 100px;
  opacity: 1;
  z-index: 999;
  cursor: auto;
  border-radius: 0.75rem;
  padding: 1rem 2rem;
}
.feature {
  background-color: white;
  width: 400px;
  padding: 1rem 2rem;
  border: 1px solid rgb(233 234 235);
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1);
}
.feature.large {
  width: 840px;
}
@media only screen and (max-width: 1399px) {
  .feature.large {
    width: 400px;
  }
}
.feature .button-close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.7;
  transition: linear 0.1s;
}
.feature .button-close:hover {
  cursor: pointer;
  opacity: 1;
  transition: linear 0.1s;
}
@media only screen and (max-width: 600px) {
  .modal-body {
    width: calc(100% - 40px) !important;
    height: auto !important;
    left: 20px !important;
    top: 20px !important;
    margin-bottom: 40px;
  }
  .feature.focused .image {
    width: auto !important;
    max-width: 100% !important;
    margin-bottom: 30px !important;
  }
  .feature.focused .title {
    text-align: center;
  }
  .feature.focused .description {
    text-align: center;
  }
}
@media only screen and (max-width: 600px) {
}
.feature .title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 15px;
}
.feature.focused .title {
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 10px;
  margin-bottom: 30px;
}
.feature .image {
  width: 100%;
  border-radius: 5px;
}
.feature .description {
  margin-top: 10px;
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(60, 65, 70);
}
.feature.focused .image {
  display: inline;
  width: auto;
  max-width: 40%;
  float: left;
  margin-right: 40px;
  margin-bottom: 20px;
}
.feature.focused .description {
  display: inline;
  margin-top: 15px;
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.feature.focused .description:deep() .header {
  margin-left: 20px !important;
}
@media only screen and (max-width: 600px) {
  .feature.focused .description:deep() .header {
    margin-left: 0 !important;
  }
}
.feature .link {
  color: rgb(4, 105, 255);
  font-style: italic;
  text-decoration: none;
  cursor: pointer;
}
.feature .link:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 440px) {
  .feature {
    width: 100% !important;
    margin-bottom: 10px !important;
  }
}
</style>
