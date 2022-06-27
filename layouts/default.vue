<template>
  <div>
    <header-temp />
    <nuxt />
    <div id="subapp"></div>
    <footer-temp />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  async mounted() {
    this.init();
  },
  computed: {},
  methods: {
    async init() {
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
  },
};
</script>
