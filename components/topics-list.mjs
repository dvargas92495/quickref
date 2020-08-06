
let template = `
<div>
    <div class="" :style="styleTopics">
        {{topic.topic}}
    </div>
</div>
`

let styleTopics = ()=> {
  return {
    height: '35px',
    border: '1px solid yellow'
  }
}

export default {
name: 'rqr-topics-list',
props:  ['topic' ] ,
components: {
  
},
  computed: {
    styleTopics
  },
template: template 
}
