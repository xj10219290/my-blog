<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div>
    <h3>Icon Test</h3>
    <div class="icon-type" v-for="(t, i) in types" :key="i">
          <Icon :type="t" />
          <span>{{ t }}</span>
    </div>
    
  </div>
</template>

<script>
import Icon, {types} from "./";
export default {
  name: "IconTest",
  components: {
    Icon,
  },
  data() {
    return {
      types
    };
  },
};
</script>

<style scoped>
.icon-container {
  font-size: 30px;
  color: red;
}

.icon-type{
  display: flex;
  flex-direction: column;
    margin: 20px;
}
</style>
