<template>
    <ul class="contact-container">
      <li v-for="(item, i) in data" :key="i">
        <a href="">
          <div class="icon">
            <Icon :type="item.type"></Icon>
          </div>
          <span>{{ item.title }}</span>
        </a>
        <div v-if="item.detail" class="pop">
          <img :src="require(`@/assets/${item.detail}`)" alt="" />
        </div>
      </li>
    </ul>
</template>

<script>

import Icon from "@/components/Icon";

export default {
    props: ['data'],
  components: {
    Icon,
  },
  data() {
    return {
      //data,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  a {
    display: flex;
    align-items: center;
  }
  margin: 0;
  padding: 20px;
  list-style: none;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    margin: 14px 0;
    line-height: @itemHeight;
    cursor: pointer;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  .icon {
    font-size: 26px;
    width: 36px;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background: #fff;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
    }
  }
}
</style>