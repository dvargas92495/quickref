export default {
  name: 'rqr-topic',
  props:  ['topic' ] ,
  template: `
  <div class="rqrTopic" style="margin:10px;">

    <div class="rqrTopicHeader" v-bind:id="'rqrTopicHeader-'+topic.topic">
        {{topic.topic}}
    </div>

    <table class="rqrTopicTable">

      <template v-if="topic.type =='keyboard'">
        <tr v-for="item in topic.items" class="rqrTableRow"> 
          <td style="width:40%">{{item.c1}}</td>
          <td style="width:30%">{{item.c2}}</td>
          <td style="width:30%">{{item.c3}}</td>
        </tr>
        <tr class="rqrTopicTableHeader">
          <td></td><td>{{topic.header.c2}}</td><td>{{topic.header.c3}}</td>
        </tr>
      </template>

      <template v-if="topic.type != 'keyboard'">
        <tr v-for="item in topic.items" class="rqrTableRow"> 
          <td style="width:25%">{{item.c1}}</td>
          <td style="width:70%">{{item.c2}}</td>
        </tr>
      </template>

    </table>

  </div>

` 
}
