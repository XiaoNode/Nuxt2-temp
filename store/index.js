import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// const TYPES = {
//   INIT_APPS: 'init_apps'
// }

const store = () =>
  new Vuex.Store({
    state: {
      app: "ksy",
      isLogined: false,
      auth: { username: null, password: null },
      token: "sdfs",
      apps: [],
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
        state.apps = payload;
      },
    },

    actions: {
      async getMenus({ commit }) {

        commit("init_apps", [
          {
            name: "vue-app",
            activeRule: "/vue",
            entry: "http://localhost:7001/",
            container: "#subapp",
          },
        ]);

      },
    },
  });

export default store;

// async function getMenus() {
//   return {
//     code: 0,
//     payload: [
//       {
//         name: "vue-app",
//         entry: "http://localhost:7001/",
//         container: "#subapp",
//       },
//     ],
//     message: "success",
//   };
// }
