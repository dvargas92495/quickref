import rqrTopicList   from './topics-list.mjs'
import rqrTopic       from './topic.mjs'
import themes         from './themes.mjs'

let template = `
<div id="rqrcontrol" :style="styleControl">
  <div style="height:50px;width:100%;padding:10px; border-bottom:1px solid green;display:flex">
    <div style="width:170px;margin-top:2px;font-size:16pt;font-style:bold">
      Quick reference
    </div>
    <input type="text" style="width:350px;height:25px">
    <div style="width:50px;text-align:right;font-size:12pt;font-style:bold:color:grey" onclick="keyboardProcessorRQF()">
      x
    </div>
  </div>
  <div>
    <div :style="styleContentArea">
      <!-- sidebar -->
      <div style="border:1px solid red; width:150px">
        <rqr-topic-list v-for="topic in references" :key="topic.topic" :topic="topic"></rqr-topic-list>
      </div>
      <div style="overflow:scroll; scrollbar-width: none; width:100%; border:1px dashed red">
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
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '400px',
      backgroundColor: 'white',
      borderRadius:    '10px',
      boxShadow:       '9px 7px 28px 2px rgba(0,0,0,0.75)',
      zIndex:           1000,
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
