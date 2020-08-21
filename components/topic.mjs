export default {
  name: 'rqr-topic',
  props:  ['topic' ],
  mounted: function () {
    this.$nextTick(function () {
      var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true && window.pauseScrolling === false ) {
          document.querySelectorAll('.rqrTopicActive').forEach(function(oldE) {
            oldE.className="rqrTopicListItem"    
          });     
          document.querySelector('#' + entries[0].target.id.replace('rqrTopicHeader','rqrtli')).className="rqrTopicActive"
        }
      }, {  rootMargin: '0px 0px -810px', threshold: [1] });
      observer.observe(document.querySelector("#" + 'rqrTopicHeader-' + this.topic.id ));
    })
  },
  template: `
  <div class="rqrTopic">

    <div class="rqrTopicHeader" v-bind:id="'rqrTopicHeader-' + topic.id  ">
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
