<!-- 父元素可以把样式带进子组件第一层 -->
<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const iconMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(iconMap)
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 需要有return，计算属性依赖中的参数（依赖）没有发生变化就不会调用函数内部方法
    fullName: {
      get() {
        return "";
      },
      set(val) {
        console.log(val);
      },
    },
    fontClass(){
        return iconMap[this.type]
    }
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>