import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      app: "ksy",
      isLogined: false,
      auth: { username: null, password: null },
      token: "sdfs",
      apps: [],
      sdk: null,
    },
    mutations: {
      setUserData(state, data) {
        console.log(data);
        state.auth.username = data.username;
        state.auth.password = data.password;
      },
      setIsLogined(state, data) {
        state.isLogined = data.isLogined;
      },

      init_apps(state, payload) {
        state.sdk = payload;
      },
    },

    actions: {
      async setSDK({ commit,state }) {
        const qiankun = await import("qiankun");
        const actions = qiankun.initGlobalState();

        const sdk = {
          globalState: actions,
          name: state.app,
        };
        commit("init_apps", sdk);
      },
    },
  });

export default store;
