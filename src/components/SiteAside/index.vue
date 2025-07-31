<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar :url="'avatar.jpeg'" :size="150" />
      <h1 class="title">XJ的小窝</h1>
    </div>

    <Menu :data="menuData" @clickMenu="clickMenuHandler()"></Menu>
    <Contact :data="contactData"></Contact>
    <p class="footer">E12213sdasfa</p>
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
const menuData = [
  {
    icon: "home",
    link: "/",
    title: "首页",
    exact: true, //是否精确匹配
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
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  data() {
    return {
      contactData,
      menuData,
    };
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

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  .avatar-img {
    margin: 0 auto;
  }
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 1.2em;
    color: #fff;
    text-align: center;
  }
}
</style>