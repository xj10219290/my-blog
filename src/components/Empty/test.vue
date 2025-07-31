<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="test-container">
    <Empty :text="inputText"></Empty>
  </div>
</template>

<script>
import Empty from "./";
export default {
  name: "EmptyTest",
  components: {
    Empty,
  },
  data() {
    return {
      inputText: '暂无数据'
    };
  },
};
</script>

<style scoped>
.test-container {
    width: 500px;
    height: 400px;
    border: 2px solid #333;
    margin: 0 auto;
    position: relative;
}
</style>
