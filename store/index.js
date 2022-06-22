import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      app: "ksy",
      isLogined: false,
      auth: { username: null, password: null },
      token:'sdfs'
    },
    mutations: {
      setUserData(state, data) {
        console.log(data);
        state.auth.username = data.username;
        state.auth.password = data.password;
      },
      setIsLogined(state, data) {
        state.isLogined= data.isLogined
      },
    },
  });

export default store;
