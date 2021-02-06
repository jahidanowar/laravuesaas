import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    authenticated: false,
    user: null,
  }),
  mutations: {},
  getters: {},
  actions: {
      async login(){
        await axios.get('/sanctum/csrf-cookie')
      }
  },
};
