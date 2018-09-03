import Vue from "vue"
import Vuex from "vuex"

// modules
import example from "./example"
// modules

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    example
  }
})
