let template = `
  <div class="styleTopicWrapper" style="margin:10px;">
    <div class="rqrtopic" style="padding-bottom:8px;height:30px; font-weight: bold; font-size:14pt">
        {{topic.topic}}
    </div>

    <table style="width:100%;border-collapse:collapse">
      <tr style="text-align:left;text-decoration:underline">
        <th>{{topic.header.c1}}</th><th>{{topic.header.c2}}</th><th>{{topic.header.c3}}</th>
      </tr>
      <tr  v-for="item in topic.items" style="border-bottom: 1px dashed lightgrey; width:100%;table-layout: fixed;overflow-wrap: break-word;">
        <td style="width:50%">{{item.c1}}</td>
        <td style="width:25%">{{item.c2}}</td>
        <td style="width:25%">{{item.c3}}</td>
      </tr>
    </table>
  </div>

`

export default {
  name: 'rqr-topic',
  props:  ['topic' ] ,
  components: {
    
  },
    computed: {
      
  },
  template: template 
}
