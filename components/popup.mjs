import rqrTopicList   from './topics-list.mjs'
import rqrTopic       from './topic.mjs'
import themes         from './themes.mjs'

let template = `
<div id="rqrcontrol" :style="styleControl">
  <div style="height:50px; border-bottom:1px solid green; width:100%">
    quick reference
    <input>
    X
  </div>
  <div>
    <div :style="styleContentArea">
      <!-- sidebar -->
      <div style="border:1px solid red; width:150px">
        <rqr-topic-list v-for="topic in references" :key="topic.topic" :topic="topic"></rqr-topic-list>
      </div>
      <div style="overflow:scroll; scrollbar-width: none">
          <rqr-topic v-for="topic in references" :key="topic.topic" :topic="topic"></rqr-topic>
      </div>
    </div>  
  </div>
</div>

`

let theme = new themes


//Color palette https://colorhunt.co/palette/195717
let styleControl = ()=> {
    return {
      backgroundColor: 'white',
      top: '30%',  bottom: '10%',
      left: '15%', right:  '15%',
      borderRadius:    '10px',
      boxShadow:       '9px 7px 28px 2px rgba(0,0,0,0.75)',
      position:        'absolute',
      zIndex:           1000,
      minWidth:        '180px',
      visibility:       'visible'
      //  visibility:       'hidden'
    }
}

let styleContentArea = ()=> {
  return {
    padding:         '5px',
    top:'40px',   left:'0px',
    right:'0px',  bottom:'9px',
    margin:'3px',
    position:'absolute',
    display: 'flex',
    flexDirection: 'row'
  }
}


export default {
  name: 'rqr-popup',
  props:  ['references'] ,
  template: template ,
  components: {
    rqrTopic,
    rqrTopicList
  },
  computed: {
    styleControl,
    styleContentArea
  },
  methods: {
    greet: function (event) {
      console.log(this.references)
    }
  }
}
