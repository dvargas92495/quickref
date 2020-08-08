let originalHoverColor=''

export default {
name: 'rqr-topics-list',
props:  ['topic', 'index' ] ,
methods: {
  //v-bind:id="'rqrTopicHeader-'+topic.topic"
  mouseover: function(e){
    originalHoverColor = e.target.style.backgroundColor
    e.target.style.backgroundColor = '#f2f2f2'
  },    
  mouseleave: function(e){
    e.target.style.backgroundColor = originalHoverColor
  },    
  click: function(e){
    const topicId =  'rqrTopicHeader-' + e.srcElement.id.replace('rqrtli-','')

    document.querySelectorAll('.rqrTopicActive').forEach(function(oldE) {
      oldE.className="rqrTopicListItem"    
    });     
    e.srcElement.className="rqrTopicActive"
    document.getElementById(topicId).scrollIntoView()
  }
},
template: `
<div>
    <div class="rqrTopicList">
      <div :class="index == 0 ? 'rqrTopicActive' :  'rqrTopicListItem'"
          v-on:click="click" 
          v-on:mouseover="mouseover" 
          v-on:mouseleave="mouseleave" 
          v-bind:id="'rqrtli-' + topic.topic">
          {{topic.topic}}
      </div>
    </div>
</div>

` 
}
