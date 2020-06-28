import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL: process.env.BASE_URL,
    theme: "vue"
  },
  mutations: {
    changeTheme(state, theme) {
      state.theme = theme;
    }
  },
  actions: {
    changeTheme({state, commit}, {theme, element}) {
      element.href = `${state.baseURL}themes/${theme}/theme.css`;
      localStorage.setItem("theme", theme);
      commit("changeTheme", theme);
    }
  },
  modules: {
  }
})
