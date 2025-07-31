<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="test-container">
    <Menu :data="menuData" @clickMenu="clickMenuHandler()"></Menu>
  </div>
</template>

<script>
const menuData = [
  {
    icon: "home",
    link: "/",
    title: "首页",
    exact: true,//是否精确匹配
  },
  {
    icon: "blog",
    link: "/blog",
    title: "文章",
    exact: false,
  },
  {
    icon: "about",
    link: "/about",
    title: "关于我",
    exact: false,
  },
  {
    icon: "code",
    link: "/project",
    title: "项目&效果",
    exact: false,
  },
  {
    icon: "chat",
    link: "/message",
    title: "留言板",
    exact: false,
  },
];
import Menu from "./";
import "@/styles/global.less";
export default {
  name: "MenuTest",
  components: {
    Menu,
  },
  data() {
    return {
      menuData,
    };
  },
  created() {
    console.log(location.pathname);
    const pathname = location.pathname;
    this.menuData.forEach((menu) => {
      if (menu.link === pathname) {
        menu.exact = true;
      } else {
        menu.exact = false;
      }
    });
  },
  methods: {
    clickMenuHandler() {
      // this.menuData.forEach((menu)=>{
      //     if(menu.link === $event) {
      //         menu.exact = true
      //     } else {
      //         menu.exact = false
      //     }
      // })
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 250px;
  height: 400px;
  background: #000;
}
</style>
