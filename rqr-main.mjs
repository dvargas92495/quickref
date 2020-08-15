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
      this.references = data
    }
  })
})();


