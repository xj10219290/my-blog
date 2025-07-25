<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div>
    <h3>Avatar Test</h3>
    <Avatar :url="url" :size="size" />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "AvatarTest",
  components: {
    Avatar,
  },
  data() {
    return {
      url: "avatar.jpeg",
      size: 80,
    };
  },
};
</script>

<style scoped>
</style>
