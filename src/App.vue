<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="app-container">
    <div class="app-aside">
      <SiteAside />
    </div>
    <div class="app-main">
      <!-- <router-view /> -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import "@/styles/global.less";
export default {
  name: "app",
  components: {
    SiteAside,
  },
  data() {
    return {
      //menuData,
    };
  },
  created() {},
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

<style scoped lang="less">
.app-container {
  display: flex;
  height: 100%;
  width: 100%;
  background: #f0f2f5;

  .app-aside {
    width: 250px;
    height: 100%;
    /* margin: 0 auto; */
    /* background: #000; */
    border: 1px solid;
  }
  .app-main {
    flex: 1;
    padding: 20px;
  }
}
</style>
