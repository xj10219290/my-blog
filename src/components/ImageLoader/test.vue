<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoaded($event)"
      :durtion="4000"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  name: "ImageLoaderTest",
  components: {
    ImageLoader,
  },
  data() {
    return {
      //inputText: '暂无数据'
    };
  },
  methods: {
    handleLoaded(e){
        console.log(e);
        
    }
  }
};
</script>

<style scoped>
.test-container {
    width: 500px;
    height: 400px;
    border: 2px solid #333;
    margin: 0 auto;
}
</style>
