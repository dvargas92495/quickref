import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js'
import rqrPopup from './components/popup.mjs'
import data     from './data.mjs'


(function() {
  let vm = new Vue({
    el: '#app',
    data () {
      return {
        references: []
      }
    },
    template: '<div><rqr-popup :references="references" ></rqr-popup></div>',
    components: {
      rqrPopup
    },
    mounted : function() {
      window.r42rqr = {}
      window.r42rqr.pauseScrolling = false
      this.references = data
    }
  })
})();


