import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    authenticated: false,
    user: null,
  }),
  getters: {
    // Return Authenticated state
    isAuthenticated: (state) => state.authenticated,
    // Return Authenticated User State
    user: (state) => state.user
  },
  mutations: {
    //Set authenticated state to true
    SET_AUTH(state, data) {
      state.authenticated = data;
    },
    //Set user state with user data
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    //Getting the CSRF Cookie and then logging in
    async login({ dispatch }, payload) {
      await axios.get("/sanctum/csrf-cookie");
      await axios.post("/api/login", payload);
      return dispatch("user");
    },
    //Getting authenticated user from the API and setting it to the state
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
