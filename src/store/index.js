import { createStore } from 'vuex'
import { home } from './home'

const store = createStore({
  state: {
    name: 'keyie'
  },
  mutations: {},
  actions: {},
  methods: {},
  modules: {
    home
  }
})

export default store
