import themes    from './themes.mjs'

let template = `
  <div class="styleTopicWrapper" style="margin:10px;">
    <div class="rqrtopic" style="padding-bottom:8px;height:30px; font-weight: bold; font-size:14pt">
        {{topic.topic}}
    </div>

    <table>
      <tr  v-for="item in topic.items">
        <td style="width:100px">{{item.s}}</td>
        <td>{{item.h}}</td>
      </tr>
    </table>
  </div>

`
//    <rqr-topic-items :items="topic.items"></rqr-topic-items>    

let theme = new themes

export default {
  name: 'rqr-topic',
  props:  ['topic' ] ,
  components: {
    
  },
    computed: {
      
  },
  template: template 
}
