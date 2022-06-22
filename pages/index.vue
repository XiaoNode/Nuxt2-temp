<template>
  <div>
    this is index page

    <!-- {{ newList }} -->
    <hr />
    <NewsList />
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";
import apis from "@/plugins/apis";

export default {
  name: "IndexPage",
  data() {
    return {
      newList: [],
    };
  },
  mounted() {
    console.log(123);
    this.getRecom();
  },
  methods: {
    getRecom() {
      this.$axiosApi(apis.newslist.url, apis.newslist.methods, {
        cid: "111",
      }).then((res) => {
        let { data } = res;
        this.$data.newList = data;
      });
    },
  },
  components: { NewsList },
};
</script>
