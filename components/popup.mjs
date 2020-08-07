import rqrTopicList   from './topics-list.mjs'
import rqrTopic       from './topic.mjs'

let template = `
<div class="rqrcontrol">
  <div class="rqrControlHeader">
    <div class="rqrControlHeaderLabel">
      Quick reference
    </div>
    <input class="rqrControlHeaderInput"  type="text">
    <div class="rqrControlHeaderCloseButton" v-on:click="hideQuickRef">
      x
    </div>
  </div>
  <div>
    <div class="rqrContentArea">
      <!-- sidebar -->
      <div class="rqrContentAreaSideBar">
        <div style="margin-top:10px;margin-right:5px">
          <rqr-topic-list v-for="topic in references" :key="topic.topic" :topic="topic"></rqr-topic-list>
        </div>  
      </div>
      <div class="rqrContentAreaTopics">
          <rqr-topic v-for="topic in references" :key="topic.topic" :topic="topic"></rqr-topic>
      </div>
    </div>  
  </div>
</div>

`

export default {
  name: 'rqr-popup',
  props:  ['references'] ,
  template: template ,
  components: {
    rqrTopic,
    rqrTopicList
  },
  methods: {
    hideQuickRef: function (event) {
      console.log('click me')
    }
  }
}
