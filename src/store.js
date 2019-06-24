import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features
// https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme
// определяет тему пользователя в операционной системе, если такая есть, например в macOS
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("darkmode", "true");
}

const userSelectedDarkMode = JSON.parse(window.localStorage.getItem("darkmode") || "true");

const state = {
  isDarkMode: userSelectedDarkMode // true/false
};

const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

const mutations = {
  toggleDarkMode(state) {
    // state.isDarkMode = !state.isDarkMode; // это работает криво (через раз), поэтому явно устанавливаю true или false, возможно это из-за экшена, может быть нужно вызывать мутацию напрямую

    if (state.isDarkMode) {
      state.isDarkMode = false;
      window.localStorage.setItem("darkmode", "false");
    } else {
      state.isDarkMode = true;
      window.localStorage.setItem("darkmode", "true");
    }
  }
};

const actions = {
  toggleDarkMode({ commit }) {
    commit("toggleDarkMode");
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
