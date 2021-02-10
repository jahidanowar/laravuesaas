import axios from "axios";

export default {
  namespaced: true,

  state: () => ({
    plans: [],
  }),

  getters: {
    getPlans: (state) => state.plans,
  },

  mutations: {
    SET_PLANS(state, data) {
      state.plans = data;
    },
  },

  actions: {
    getPlansApi({ commit }) {
      axios.get("/api/plan").then((reponse) => {
        commit("SET_PLANS", reponse.data.data);
      });
    },
  },
};
