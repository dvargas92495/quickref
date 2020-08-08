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
          <td style="width:40%"><span v-html="item.c1"></span></td>
          <td style="width:30%"><span v-html="item.c2"></span></td>
          <td style="width:30%"><span v-html="item.c3"></span></td>
        </tr>
        <tr class="rqrTopicTableHeader">
          <td></td><td>{{topic.header.c2}}</td><td>{{topic.header.c3}}</td>
        </tr>
      </template>

      <template v-if="topic.type == 'feature'">
        <tr v-for="item in topic.items" class="rqrTableRow"> 
          <td style="width:25%"><span v-html="item.c1"></span></td>
          <td style="width:70%"><span v-html="item.c2"></span></td>
        </tr>
      </template>

      <template v-if="topic.type == 'example'">
        <tr v-for="item in topic.items" class="rqrTableRow"> 
          <td style="width:100%"><span v-html="item.c1"></span></td>
        </tr>
      </template>

    </table>

  </div>

` 
}
