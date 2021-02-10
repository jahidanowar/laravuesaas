import { createStore } from 'vuex'
import Auth from './auth'
import Plan from './plan'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: Auth,
    plan: Plan,
  }
})
