<template>
  <div>
    <div>
      <input type="text" v-model="value" />
      <button @click="handleChange">change global value</button>
    </div>
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
  computed: {
    ...mapState(["sdk"]),
  },
  methods: {
    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      });
    },
  },
};
</script>
