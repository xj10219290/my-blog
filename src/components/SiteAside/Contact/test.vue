<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="test-container">
    <h1>ContactTest</h1>
    <Contact :data="contactData"></Contact>
  </div>
</template>

<script>
const contactData = [
  {
    type: "github",
    title: "https://github.com/",
    detail: "",
  },
  {
    type: "mail",
    title: "1150300538@qq.com",
    detail: "",
  },
  {
    type: "qq",
    title: "1150300538",
    detail: "logo.png",
  },
  {
    type: "weixin",
    title: "189940973*5",
    detail: "avatar.jpeg",
  },
];
import Contact from "./";
import '@/styles/global.less'
export default {
  name: "ContactTest",
  components: {
    Contact,
  },
  data() {
    return {
      contactData
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.test-container {
    width: 250px;
    height: 400px;
    background: #333;
    padding: 10px 0;
}

h1 {
    color: @lightWords
}
</style>
