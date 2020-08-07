export default {
  name: 'rqr-topic',
  props:  ['topic' ] ,
  template: `
  <div class="rqrTopic" style="margin:10px;">
    <div class="rqrTopicHeader">
        {{topic.topic}}
    </div>

    <table class="rqrTopicTable">
      <tr  v-for="item in topic.items" style="border-bottom: 1px dashed lightgrey; width:100%;table-layout: fixed;overflow-wrap: break-word;">
        <td style="width:50%">{{item.c1}}</td>
        <td style="width:25%">{{item.c2}}</td>
        <td style="width:25%">{{item.c3}}</td>
      </tr>
      <tr class="rqrTopicTableHeader">
         <td></td><td>{{topic.header.c2}}</td><td>{{topic.header.c3}}</td>
      </tr>
    </table>
  </div>

` 
}
