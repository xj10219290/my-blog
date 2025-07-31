<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  name: "SiteAsideTest",
  components: {
    SiteAside,
  },
  data() {
    return {
      //menuData,
    };
  },
  created() {
   
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
  height: 100%;
  /* margin: 0 auto; */
  /* background: #000; */
  border: 1px solid
}
</style>
