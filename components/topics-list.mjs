let originalHoverColor=''

export default {
name: 'rqr-topics-list',
props:  ['topic' ] ,
methods: {
  mouseover: function(e){
    originalHoverColor = e.target.style.backgroundColor
    e.target.style.backgroundColor = '#f2f2f2'
  },    
  mouseleave: function(e){
    e.target.style.backgroundColor = originalHoverColor
  }
},
template: `
<div>
    <div class="rqrTopicList">
      <div class="rqrTopicListItem" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            {{topic.topic}}
      </div>
    </div>
</div>

` 
}
