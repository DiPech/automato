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
      <div class="image-wrapper">
        <img :src="image" class="image" />
      </div>
      <div class="description">
        {{ preview }}
        <br />
        <span class="link" @click="emit('focus')"> read more </span>
      </div>
    </template>
    <template v-if="isFocused">
      <div class="title text-center text-sm-start">{{ title }}</div>
      <img :src="closeImg" class="button-close" @click="emit('unfocus')" />
      <div class="body-wrapper">
        <div class="row">
          <div class="col-sm-6">
            <div class="image-wrapper text-center text-sm-start">
              <img :src="image" class="image" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="description text-center text-sm-start">
              <span v-html="processedDescription"></span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
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
.feature.focused {
  z-index: 999;
  position: fixed !important;
  width: calc(100% - 100px) !important;
  height: auto !important;
  max-height: calc(100% - 100px) !important;
  left: 50px !important;
  top: 50px !important;
  cursor: auto;
  overscroll-behavior: contain;
  overflow-y: auto;
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
  .feature.focused {
    width: calc(100% - 40px) !important;
    height: auto !important;
    max-height: calc(100% - 40px) !important;
    left: 20px !important;
    top: 20px !important;
  }
}
.feature .title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}
.feature.focused .title {
  font-size: 2.5rem;
  line-height: 2.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
.feature .image {
  margin-top: 20px;
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
  width: auto;
  max-width: 100%;
  max-height: 550px;
  margin-bottom: 15px;
}
.feature.focused .description {
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
.body-wrapper {
  /* overflow-y: auto; */
}
</style>
