<!-- SFC 单文件组件 -->
<!-- 预编译 打包时会把模板转换为render函数效率高 -->
<template>
  <div>
    <h3>My App</h3>
    <Avatar :url="url" :size="size" />
    <Icon type='chat' />
  </div>
</template>

<script>
import Avatar from './components/Avatar';
import Icon from './components/Icon';
export default {
  name: 'app',
  components: {
    Avatar,
    Icon
  },
  data() {
    return {
      url: 'avatar.jpeg',
      size: 80
    }
  }
}
</script>

<style scoped>
  .icon-container {
    font-size: 30px; 
    color: red;
  }
</style>
