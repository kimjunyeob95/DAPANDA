import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

export default createStore({
  state() {
    return {
      user: {}
    }
  },
  getters: {},
  mutations: {
    user(state, data) {
      state.user = data
    }
  },
  actions: {},
  modules: {},
  plugins: [
    persistedstate({
      paths: ['user']
    })
  ]
})
