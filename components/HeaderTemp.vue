<template>
  <div class="header">
    <div class="nav">
      <CommonLogo />
      <ul class="ksy-ib">
        <li>
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">产品服务</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">优选服务</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">一键算税</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">税务资讯</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">关于我们</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">跨标云</nuxt-link>
        </li>
      </ul>
      <div class="ksy-fr">
        <UserInfo />
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "./common/UserInfo.vue";
export default{
  components:{
    UserInfo
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 76px;
  background: #ffffff;
  box-shadow: 0px 2px 12px 1px rgba(16, 68, 166, 0.07);
  border-radius: 0px 0px 0px 0px;
  .nav {
    max-width: 1320px;
    margin: 0 auto;
    height: 76px;
    line-height: 76px;
    ul {
      margin-left: 50px;
    }
    li {
      display: inline-block;
      a {
        font-size: 16px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.9);
        line-height: 24px;
        padding: 0 15px;
      }
    }
  }
}
</style>
