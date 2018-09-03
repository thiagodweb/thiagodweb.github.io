import Vue from 'vue'
import store from "./stores"
import components from "./components"
import directives from "./directives"
import AOS from 'aos';
// ..
AOS.init();

// CSS
import "./../scss/main.scss";
// CSS

let vue = new Vue({
  el: '#app',
  components,
  directives,
  store
})
