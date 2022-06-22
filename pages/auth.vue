<template>
  <div>
    <el-form :model="user" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名">
        <el-input
          type="text"
          v-model="user.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="text"
          v-model="user.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit("setUserData", this.$data.user);
      this.$store.commit("setIsLogined", {isLogined:true});

      this.$router.push({ name: "userinfo" });
    }
  },
};
</script>
<style scoped>
div {
  max-width: 400px;
  margin: 20px auto;
}
</style>
