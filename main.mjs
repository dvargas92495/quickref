import Vue      from 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm.browser.js'
import rqrPopup from './components/popup.mjs'

const keyboardProcessorRQF = ()=> {
  console.log('keyboardProcessorRQF')
  let c = document.querySelector('#rqrcontrol')
  console.log(c)
  if(c.style.visibility == 'hidden') {
    c.style.visibility = 'visible'
  } else {
    c.style.visibility = 'hidden'
  }
}

document.addEventListener("keydown", (e)=> {
  if(   e.ctrlKey==true  &&  e.key=='H'  ) {
    e.preventDefault();
    keyboardProcessorRQF()
  }
})


let divRoot = document.createElement("div")
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
  template: '<div><rqr-popup :references="references"></rqr-popup></div>',
  components: {
    rqrPopup
  },
  mounted : function () {
    fetch('./data.json')
      .then(response => {
        response.json().then(results =>  {
        this.references = results
        });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
})
