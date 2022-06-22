<template>
  <div>
    资讯列表
    <i class="el-icon-loading" v-if="loading"></i>
    <!-- <div v-else>{{ newList }} </div>-->
    <ul v-else>
      <li v-for="item in newList" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import apis from "@/plugins/apis";

export default {
  name: "IndexPage",
  data() {
    return {
      newList: [],
      loading: false,
    };
  },
  mounted() {
    this.getRecom();
  },
  methods: {
    async getRecom() {
      this.$data.loading = true;
      let { data } = await this.$axiosApi(
        apis.newslist.url,
        apis.newslist.methods
      );
      this.$data.loading = false;
      this.$data.newList = data;
    },
  },
};
</script>
