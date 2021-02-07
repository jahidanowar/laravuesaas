import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    authenticated: false,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => state.authenticated,
    user: (state) => state.user
  },
  mutations: {
    SET_AUTH(state, data) {
      state.authenticated = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async login({ dispatch }, payload) {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/login", payload);
      return dispatch("user");
    },
    user({ commit }) {
      axios
        .get("/api/user")
        .then((response) => {
          commit("SET_AUTH", true);
          commit("SET_USER", response.data);
        })
        .catch(() => {
          commit("SET_AUTH", false);
          commit("SET_USER", null);
        });
    },
  },
};
