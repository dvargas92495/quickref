
let template = `
<div>
    <div class="rqrTopicsList">
      <div class="rqrTopicListItem" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave">
            {{topic.topic}}
      </div>
    </div>
</div>
`

let originalHoverColor=''

export default {
name: 'rqr-topics-list',
props:  ['topic' ] ,
components: {
  
},
computed: {
  
},
methods: {
  mouseover: function(e){
    originalHoverColor = e.target.style.backgroundColor
    e.target.style.backgroundColor = '#f2f2f2'
  },    
  mouseleave: function(e){
    e.target.style.backgroundColor = originalHoverColor
  }
},
template: template 
}
