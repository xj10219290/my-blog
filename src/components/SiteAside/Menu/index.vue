<template>
  <ul class="menu-container">
    <li v-for="(item, i) in data" :key="i">
      <!-- <a :href="item.link" :class="{selected: getActived(item)}" @click="clickHandler(item.link)">
        <div class="icon">
          <Icon :type="item.icon"></Icon>
        </div>
        <span> {{ item.title }} </span>
      </a> -->
      <router-link :to="item.link" :class="{selected:selectedLink===item.link} " @click.native="clickHandler(item.link)">
        <div class="icon">
          <Icon :type="item.icon"></Icon>
        </div>
        <span> {{ item.title }} </span></router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: ["data"],
  components: {
    Icon,
  },
  data() {
    return {
      selectedLink: location.hash.toLowerCase().slice(1)
    };
  },
  methods: {
    clickHandler(link) {
      console.log("clickHandler", link);
      this.selectedLink = link;
      this.$emit("clickMenu", link);
    },
    // getActived(item) {
    //   // if(item.exact) {
    //   //     return location.pathname.toLowerCase() === item.link
    //   // } else {
    //   //     return location.pathname.toLowerCase().startsWith(item.link)
    //   // }
    //   return location.hash.toLowerCase().slice(1) === item.link;
    // },
  },
  computed: {
    getActived() {
      return this.selectedLink === location.hash.toLowerCase().slice(1);
    }
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  list-style: none;
  margin: 24px 0;
  padding: 0;
  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background: darken(@words, 3%);
    }
  }
  //   li {
  //     height: 45px;
  //     line-height: 45px;
  //   }
}
</style>