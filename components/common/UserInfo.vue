<template>
  <p>
    <span v-if="!isLogined">
      <nuxt-link to="/" class="ksy-ml-4">登录</nuxt-link>
      <el-button type="primary" class="ksy-ml-4"> 注册 </el-button>
    </span>
    <span v-if="isLogined"> 用户名 </span>
  </p>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserInfo",
  computed: {
    ...mapState({
      isLogined: (state) => state.isLogined,
    }),
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
