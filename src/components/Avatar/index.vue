<template>
  <img class="avatar-img" :src="imageUrl" :style="{
    width: size + 'px',
    height: size + 'px'
  }" />
</template>

<script>
export default {
  props: {
    url: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 100
    }
  },
  data() {
    return {};
  },
  computed: {
    imageUrl() {
      // 如果传入的是网络 URL（如 http://...），直接使用
      if (this.url.startsWith("http") || this.url.startsWith("//")) {
        return this.url;
      }
      // 如果是本地 assets 图片，使用 require 动态加载
      return require(`@/assets/${this.url}`);
    },
  },
  
};
</script>

<style scoped>
.avatar-img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>
