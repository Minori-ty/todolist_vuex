import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    inputValue: 'aaa'
  },
  mutations: {
    initList (state, list) {
      state.list = list
    },
    setInputValue (state, val) {
      state.inputValue = val
    }
  },
  actions: {
    async getList (context) {
      const { data: res } = await axios.get('/list')
      var result = res.data
      context.commit('initList', result)
    }
  },
  modules: {}
})
