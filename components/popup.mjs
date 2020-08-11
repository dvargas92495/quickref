import rqrTopicList   from './topics-list.mjs'
import rqrTopic       from './topic.mjs'

export default {
  name: 'rqr-popup',
  props:  ['references' ] ,
  data: function () {
    return {
      query: '',
      copyRefs: []
    }
  },
  components: {
    rqrTopic,
    rqrTopicList
  },
  methods: {
    hideQuickRef: function (event) {
      window.keyboardProcessorRQF()
    },
    queryChange: function (event) {
      this.getFilteredData()
    },
    getFilteredData: function() {
      if(this.query == ''){
        this.copyRefs = JSON.parse(JSON.stringify(this.references))
      } else {
        let t = JSON.parse(JSON.stringify(this.references))
        let searchValue = this.query.toLowerCase()
        let newArray =  t.filter(function(topic){
          let newItems = topic.items.filter(function(item){
            try {
              if( item.c1.toLowerCase().includes(searchValue) || 
                  item.c2.toLowerCase().includes(searchValue) ||
                  item.c3.toLowerCase().includes(searchValue) ) {
                return item
              } else { return false}
            } catch (error) {}
            })
            if(newItems.length > 0) {
              topic.items = newItems
              return topic
            }
        })          
        this.copyRefs = newArray
      }
    }
  },
  watch: { 
    references: function(newVal, oldVal) {
      this.getFilteredData()
    }
  },
  template: `
  <div class="rqrcontrol">
    <div class="rqrControlHeader">
      <div class="rqrControlHeaderLabel">
        Quick Reference
      </div>
      <input id="rqrControlHeaderInput" class="rqrControlHeaderInput" placeholder="Search..."  type="text"
             v-model="query" 
             v-on:input="queryChange" 
             v-on:keyup.escape="hideQuickRef">
      <div class="rqrControlHeaderCloseButton" v-on:click="hideQuickRef">
        x
      </div>
    </div>
    <div>
      <div class="rqrContentArea">
        <!-- sidebar -->
        <div class="rqrContentAreaSideBar">
          <div style="margin-top:10px;margin-right:5px">
            <rqr-topic-list v-for="(topic, index)  in copyRefs"  :index="index" :key="topic.topic" :topic="topic"></rqr-topic-list>
          </div>  
        </div>
        <div class="rqrContentAreaTopics">
            <rqr-topic v-for="topic in copyRefs" :key="topic.topic" :topic="topic"></rqr-topic>
        </div>
      </div>  
    </div>
  </div>
  
  `
}
