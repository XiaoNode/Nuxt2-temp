<template>
  <div>
    <header-temp />
    <!-- <div>
      <input type="text" v-model="value" />
      <button @click="handleChange">change global value</button>
    </div> -->
    <nuxt />
    <div id="subapp"></div>
    <footer-temp />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
    };
  },
  async mounted() {
    this.init();
  },
  computed: {
    ...mapState(["sdk"]),
  },
  methods: {
    async init() {
      this.$store.dispatch("setSDK");

      const qiankun = await import("qiankun");
      // 注册所有子应用
      qiankun.registerMicroApps([
        // {
        //   name: "vue-app",
        //   activeRule: "/vue",
        //   entry: "http://localhost:7001/",
        //   container: "#subapp",
        // },
        {
          name: "vue3-app",
          activeRule: "/user",
          entry: "http://localhost:7002/",
          container: "#subapp",
        },
      ]);

      // 启动
      qiankun.start();
    },
    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      });
    },
  },
};
</script>
