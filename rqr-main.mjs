import Vue      from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.min.js'
import rqrPopup from './components/popup.mjs'
import data     from './data.mjs'

// Function to dynamically add a new CSS File to the current site 
function addCSSToPage(tagId, cssToAdd) {
  //Delete any existing reference added earlier to this script
  var old = document.getElementById(tagId) 
  if(old){ old.remove()}

  var cssLink = document.createElement('link')
      cssLink.type  = 'text/css' 
      cssLink.rel   = 'stylesheet';  
      cssLink.href  = cssToAdd
      cssLink.id    = tagId
      cssLink.async = false
  document.getElementsByTagName('head')[0].appendChild(cssLink)
}

if(window.hostingSite === undefined ) {
  //used for testing
  addCSSToPage('rqrCSS', 'https://roam-quickref.glitch.me/rqr.css') 
} else {
  addCSSToPage('rqrCSS', window.hostingSite + 'rqr.css') 
}

window.keyboardProcessorRQF = ()=> {
  let c = document.querySelector('.rqrcontrol')
  if(c.style.visibility == 'hidden' || c.style.visibility == '') {
    c.style.visibility = 'visible'
    document.getElementById('rqrControlHeaderInput').focus();
    document.getElementById('rqrControlHeaderInput').select();
  } else {
    c.style.visibility = 'hidden'
  }
}

document.addEventListener('keydown', (e)=> {
  if( e.ctrlKey==true  &&  e.key=='H' ) {
    e.preventDefault();
    keyboardProcessorRQF()
  }
})

let divRoot = document.createElement('div')
    divRoot.id = 'rqrPopup' 
    divRoot.visibility = 'hidden'  
    divRoot.height = 0
    divRoot.width = 0
document.body.appendChild(divRoot)

let vm = new Vue({
  el: '#rqrPopup',
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
