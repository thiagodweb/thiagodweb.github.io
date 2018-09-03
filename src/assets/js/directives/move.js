import Vue from "vue";

Vue.directive('move', {
  bind: function (el, binding, vnode) {
    el.addEventListener('mouseover', function(e){
        el.classList.add('up')
    }, false)

    el.addEventListener('mouseout', function(e){
        el.classList.remove('up')
    }, false)

  }
});

export default{}
